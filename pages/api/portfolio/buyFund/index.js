import dbConnect from "../../../../utils/dbConnect";
import getTokenFromRequest from "../../../../utils/getTokenFromRequest";
import jwt from "jsonwebtoken";
import User from "../../../../models/User";
import FundData from "../../../../models/FundData";
import ExchangeRates from "../../../../models/ExchangeRates";
import adjustValueByCurrency from "../../../../components/DrawerTabs/PortfolioTabs/adjustValueByCurrency";
import roundToSetPrecision from "../../../../utils/roundToSetPrecision";

export default async function Handler(req, res) {
  if (req.method === "POST") {
    await dbConnect();

    const token = getTokenFromRequest(req);
    const decodedToken = jwt.verify(token, process.env.SECRET);

    const { fundName, numberOfShares } = req.body;

    if (!token || !decodedToken.id || typeof numberOfShares !== "number") {
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

      const cost = adjustValueByCurrency({
        fundName,
        value: yData[yData.length - 1] * numberOfShares,
        exchangeRates,
      });

      const roundedCost = roundToSetPrecision(cost);

      if (balance >= cost) {
        const newPortfolio = { ...portfolio };

        if (portfolio[fundName] === undefined) {
          newPortfolio[fundName] = {
            ...portfolio[fundName],
            shares: numberOfShares,
            buyHistory: [
              {
                numberOfBoughtShares: numberOfShares,
                buyDate: new Date(process.env.END_DATE).getTime(),
                acquisitionValue: roundedCost,
              },
            ],
          };
        } else {
          newPortfolio[fundName] = {
            ...portfolio[fundName],
            shares: portfolio[fundName].shares + numberOfShares,
            buyHistory: [
              ...portfolio[fundName].buyHistory,
              {
                numberOfBoughtShares: numberOfShares,
                buyDate: new Date(process.env.END_DATE).getTime(),
                acquisitionValue: roundedCost,
              },
            ],
          };
        }

        user.portfolio = newPortfolio;
        user.balance = balance - roundedCost;

        const { portfolio: updatedPortfolio } = await user.save();

        res.status(200).json({ updatedPortfolio, fundData });
      } else {
        return res.status(403).end();
      }
    } catch (e) {
      return res.status(400).end();
    }
  }
}
