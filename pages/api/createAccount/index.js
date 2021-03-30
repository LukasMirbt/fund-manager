import bcrypt from "bcrypt";
import User from "../../../models/User";
import dbConnect from "../../../utils/dbConnect";

const saltRounds = 12;

export default async function Handler(req, res) {
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
        portfolio: {
          "SEB Strategi Balanserad C SEK - Lux": {
            shares: 100,
            buyHistory: [
              {
                numberOfBoughtShares: 100,
                buyDate: 1249603200000,
                acquisitionValue: 11332,
              },
            ],
          },
          "JOHCM Global Select B EUR": {
            shares: 100,
            buyHistory: [
              {
                numberOfBoughtShares: 100,
                buyDate: 1273190400000,
                acquisitionValue: 10290,
              },
            ],
          },
          "SEB Asienfond ex-Japan": {
            shares: 100,
            buyHistory: [
              {
                numberOfBoughtShares: 100,
                buyDate: 1401148800000,
                acquisitionValue: 1800,
              },
            ],
          },
          "MS INVF Global Opportunity A": {
            shares: 100,
            buyHistory: [
              {
                numberOfBoughtShares: 100,
                buyDate: 1420070400000,
                acquisitionValue: 30906,
              },
            ],
          },
        },
        balance: 999999,
      });

      await user.save();

      res.status(200).end();
    }
  }
}
