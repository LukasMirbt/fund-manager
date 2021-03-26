const adjustValueByCurrency = ({ fundName, value, exchangeRates }) => {
  if (fundName.includes("EUR") === true) {
    return value * exchangeRates["EUR"];
  } else if (fundName.includes("USD") === true) {
    return value * exchangeRates["EUR"];
  } else {
    return value;
  }
};

export default adjustValueByCurrency;
