import jwt from "jsonwebtoken";
import User from "../../models/User";
import dbConnect from "../../utils/dbConnect";
import FundData from "../../models/FundData";
import getTokenFromRequest from "../../utils/getTokenFromRequest";

export default async function handler(req, res) {
  if (req.method === "POST") {
    await dbConnect();

    const token = getTokenFromRequest(req);

    const decodedToken = jwt.verify(token, process.env.SECRET);

    if (!decodedToken.id) {
      return res.status(401).end();
    }

    const user = await User.findById(decodedToken.id);

    if (user === null) {
      return res.status(401).end();
    }

    const { username, portfolio, balance } = user;

    const portfolioFundNames = Object.keys(portfolio);

    const portfolioChartData = await Promise.all(
      portfolioFundNames.map((fundName) => FundData.findById(fundName))
    );

    res.status(200).json({
      userData: {
        token,
        username,
        portfolio,
        balance,
      },
      portfolioChartData,
    });
  }
}
