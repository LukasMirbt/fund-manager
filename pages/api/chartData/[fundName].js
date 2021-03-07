import dbConnect from "../../../utils/dbConnect";
import FundData from "../../../models/FundData";
import mongoose from "mongoose";

export default async function handler(req, res) {
  await dbConnect();

  const { fundName } = req.query;

  const replacedFundName = fundName.replace(/&/g, "&amp;").split("+").join(" ");

  console.log(mongoose.Types.ObjectId("test 123 fund something"));

  const data = await FundData.findById(replacedFundName);

  res.status(200).json(data);
}
