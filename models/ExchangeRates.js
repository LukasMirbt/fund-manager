import mongoose from "mongoose";

const ExchangeRatesSchema = new mongoose.Schema(
  {
    USD: Number,
    EUR: Number,
  },
  { collection: "exchangeRates" }
);

export default mongoose.models.ExchangeRates ||
  mongoose.model("ExchangeRates", ExchangeRatesSchema);
