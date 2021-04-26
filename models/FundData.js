import mongoose from "mongoose";

export const fundDataType = {
  _id: String,
  indexFund: String,
  morningstarRating: String,
  ISIN: String,
  xData: [Number],
  yData: [Number],
};

const FundDataSchema = new mongoose.Schema(fundDataType, {
  collection: "fundData",
});

export default mongoose.models.FundData ||
  mongoose.model("FundData", FundDataSchema);
