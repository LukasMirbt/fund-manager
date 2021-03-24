import dbConnect from "../../../utils/dbConnect";
import FundData from "../../../models/FundData";

export default async function Handler(req, res) {
  if (req.method === "POST") {
    await dbConnect();

    const { fundName } = req.query;

    const replacedFundName = fundName
      .replace(/&/g, "&amp;")
      .split("+")
      .join(" ");

    const data = await FundData.findById(replacedFundName);

    res.status(200).json(data);
  }
}
