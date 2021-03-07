import mongoose from "mongoose";

const InitialDataSchema = new mongoose.Schema(
  {
    initialFundName: String,
    initialFundChartData: Object,
    tableData: Array,
    recommendedChartData: Array,
    recommendedFunds: Array,
  },
  { collection: "initialData" }
);

export default mongoose.models.InitialData ||
  mongoose.model("InitialData", InitialDataSchema);
