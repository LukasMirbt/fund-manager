import mongoose from "mongoose";

const InitialPortfolioDataSchema = new mongoose.Schema(
  {
    exchangeRates: Object,
    portfolio: Object,
  },
  { collection: "initialPortfolioData" }
);

export default mongoose.models.InitialPortfolioData ||
  mongoose.model("InitialPortfolioData", InitialPortfolioDataSchema);
