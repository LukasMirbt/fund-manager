import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../../models/User";
import dbConnect from "../../utils/dbConnect";
import InitialPortfolioData from "../../models/InitialPortfolioData";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "POST") {
    const { body } = req;

    const user = await User.findOne({ username: body.username });

    const isPasswordCorrect =
      user === null
        ? false
        : await bcrypt.compare(body.password, user.passwordHash);

    if (!(user && isPasswordCorrect)) {
      res.status(401).json({
        error: "invalid username or password",
      });
      return;
    }

    const userForToken = {
      username: user.username,
    };

    const token = jwt.sign(userForToken, process.env.SECRET);

    const initialPortfolioData = await InitialPortfolioData.findOne({});

    res.status(200).json({
      token,
      initialPortfolioData,
    });
  }
}
