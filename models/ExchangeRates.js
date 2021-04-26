import mongoose from "mongoose";

export const exchangeRatesType = {
  USD: Number,
  EUR: Number,
};

const ExchangeRatesSchema = new mongoose.Schema(exchangeRatesType, {
  collection: "exchangeRates",
});

export default mongoose.models.ExchangeRates ||
  mongoose.model("ExchangeRates", ExchangeRatesSchema);
