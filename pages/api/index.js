import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../../models/User";
import dbConnect from "../../utils/dbConnect";
import FundData from "../../models/FundData";

export default async function handler(req, res) {
  if (req.method === "POST") {
    await dbConnect();

    const { body } = req;

    const user = await User.findOne({ username: body.username });

    let isPasswordCorrect = false;
    const doesUserExist = user !== null;

    if (doesUserExist === true) {
      isPasswordCorrect = await bcrypt.compare(
        body.password,
        user.passwordHash
      );

      if (isPasswordCorrect === false) {
        return res.status(401).json({
          usernameError: null,
          passwordError: "Incorrect password",
        });
      }
    } else {
      return res.status(401).json({
        usernameError: "User doesn't exist",
        passwordError: null,
      });
    }

    const { username, _id, portfolio, balance } = user;

    const userForToken = {
      username,
      id: _id,
    };

    const token = jwt.sign(userForToken, process.env.SECRET);

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
