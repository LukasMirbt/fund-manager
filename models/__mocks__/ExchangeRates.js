const mockExchangeRates = {
  USD: 10,
  EUR: 10,
};

class ExchangeRates {
  static findOne() {
    return Promise.resolve(mockExchangeRates);
  }
}

export default ExchangeRates;
