import mongoose from "mongoose";
import { exchangeRatesType } from "./ExchangeRates";
import { fundDataType } from "./FundData";

const tableDataObjectType = {
  recommendation: String,
  fundName: String,
  ISIN: String,
  oneDC: String,
  oneYC: String,
  threeYC: String,
  fiveYC: String,
  morningstarRating: String,
  mostRecentDate: String,
};

const InitialDataSchema = new mongoose.Schema(
  {
    initialFundName: String,
    initialFundChartData: fundDataType,
    tableData: [tableDataObjectType],
    recommendedChartData: [fundDataType],
    recommendedFunds: [[String]],
    exchangeRates: exchangeRatesType,
  },
  { collection: "initialData" }
);

export default mongoose.models.InitialData ||
  mongoose.model("InitialData", InitialDataSchema);
