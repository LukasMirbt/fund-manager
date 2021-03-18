import mongoose from "mongoose";

const FundDataSchema = new mongoose.Schema(
  {
    _id: String,
    indexFund: String,
    morningstarRating: String,
    ISIN: String,
    xData: Array,
    yData: Array,
  },
  { collection: "fundData" }
);

export default mongoose.models.FundData ||
  mongoose.model("FundData", FundDataSchema);
