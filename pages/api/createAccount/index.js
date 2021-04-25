import bcrypt from "bcrypt";
import User from "../../../models/User";
import dbConnect from "../../../utils/dbConnect";
import {
  initialPortfolio,
  initialBalance,
} from "../../../utils/initialUserData";

const saltRounds = 12;

export default async function handler(req, res) {
  if (req.method === "POST") {
    await dbConnect();

    const { username, password } = req.body;

    if (username.length < 3 || password.length < 3) {
      return res.status(403).json({
        usernameError:
          username.length < 3
            ? "Username must be at least 3 characters long"
            : null,
        passwordError:
          password.length < 3
            ? "Password must be at least 3 characters long"
            : null,
      });
    }

    const isUsernameTaken = !!(await User.findOne({ username }));

    if (isUsernameTaken === true) {
      return res.status(403).json({
        usernameError: "Username is taken",
        passwordError: null,
      });
    } else {
      const passwordHash = await bcrypt.hash(password, saltRounds);

      const user = new User({
        username,
        passwordHash,
        portfolio: initialPortfolio,
        balance: initialBalance,
      });

      await user.save();

      return res.status(200).end();
    }
  }
}
