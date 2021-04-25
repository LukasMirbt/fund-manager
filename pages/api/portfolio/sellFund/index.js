import dbConnect from "../../../../utils/dbConnect";
import getTokenFromRequest from "../../../../utils/getTokenFromRequest";
import jwt from "jsonwebtoken";
import User from "../../../../models/User";
import FundData from "../../../../models/FundData";
import ExchangeRates from "../../../../models/ExchangeRates";
import adjustValueByCurrency from "../../../../components/Drawer/DrawerTabs/PortfolioTabs/adjustValueByCurrency";
import roundToSetPrecision from "../../../../utils/roundToSetPrecision";

export default async function handler(req, res) {
  if (req.method === "POST") {
    await dbConnect();

    const token = getTokenFromRequest(req);

    let decodedToken;

    try {
      decodedToken = jwt.verify(token, process.env.SECRET);
    } catch (e) {
      return res.status(401).end();
    }

    const { fundName, numberOfShares } = req.body;

    if (
      !token ||
      !decodedToken.id ||
      typeof numberOfShares !== "number" ||
      numberOfShares <= 0
    ) {
      return res.status(401).end();
    }

    try {
      const [user, fundData, exchangeRates] = await Promise.all([
        User.findById(decodedToken.id),
        FundData.findById(fundName),
        ExchangeRates.findOne({}),
      ]);

      const { balance, portfolio } = user;
      const { yData } = fundData;

      const sellValue = adjustValueByCurrency({
        fundName,
        value: yData[yData.length - 1] * numberOfShares,
        exchangeRates,
      });

      const roundedSellValue = roundToSetPrecision(sellValue);

      if (
        portfolio[fundName] !== undefined &&
        portfolio[fundName].shares >= numberOfShares
      ) {
        const newPortfolio = { ...portfolio };

        if (numberOfShares === portfolio[fundName].shares) {
          delete newPortfolio[fundName];
        } else {
          if (portfolio[fundName].sellHistory === undefined) {
            newPortfolio[fundName] = {
              ...portfolio[fundName],
              shares: portfolio[fundName].shares - numberOfShares,
              sellHistory: [
                {
                  numberOfSoldShares: numberOfShares,
                  sellDate: new Date(process.env.END_DATE).getTime(),
                  sellValue: roundedSellValue,
                },
              ],
            };
          } else {
            newPortfolio[fundName] = {
              ...portfolio[fundName],
              shares: portfolio[fundName].shares - numberOfShares,
              sellHistory: [
                ...portfolio[fundName].sellHistory,
                {
                  numberOfSoldShares: numberOfShares,
                  sellDate: new Date(process.env.END_DATE).getTime(),
                  sellValue: roundedSellValue,
                },
              ],
            };
          }
        }

        const updatedBalance = balance + roundedSellValue;

        user.portfolio = newPortfolio;
        user.balance = updatedBalance;

        const { portfolio: updatedPortfolio } = await user.save();

        res.status(200).json({ updatedPortfolio, updatedBalance });
      } else {
        return res.status(403).end();
      }
    } catch (e) {
      return res.status(400).end();
    }
  }
}
