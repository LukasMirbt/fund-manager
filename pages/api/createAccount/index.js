import bcrypt from "bcrypt";
import User from "../../../models/User";
import dbConnect from "../../../utils/dbConnect";

const saltRounds = 12;

export default async function Handler(req, res) {
  if (req.method === "POST") {
    await dbConnect();

    const { username, password } = req.body;

    const isUsernameTaken = !!(await User.findOne({ username }));

    if (isUsernameTaken === true) {
      res.status(403).end();
    } else {
      const passwordHash = await bcrypt.hash(password, saltRounds);

      const user = new User({
        username,
        passwordHash,
      });

      await user.save();

      res.status(200).end();
    }
  }
}
