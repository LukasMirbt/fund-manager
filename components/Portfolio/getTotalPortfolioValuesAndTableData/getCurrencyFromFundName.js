const getCurrencyFromFundName = fundName => {
  if (fundName.includes("USD")) {
    return "USD";
  }
  if (fundName.includes("EUR" || "€")) {
    return "EUR";
  }
  return "SEK";
};

export default getCurrencyFromFundName;
