import mongoose from "mongoose";

const FundDataSchema = new mongoose.Schema(
  {
    _id: mongoose.ObjectId,
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
