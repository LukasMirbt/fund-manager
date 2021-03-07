import dbConnect from "../../utils/dbConnect";
import FundData from "../../models/FundData";

export default async function handler(req, res) {
  await dbConnect();

  const { fundName } = req.query;

  console.log(fundName);

  const replacedFundName = fundName.replace(/&/g, "&amp;");

  const data = await FundData.findById(replacedFundName);

  res.status(200).json(data);
}
