const createInitialPortfolioState = (initialData) => {
  const { exchangeRates, portfolio, portfolioData, balance } = initialData;

  return {
    exchangeRates,
    portfolio,
    portfolioData,
    balance,
    portfolioFundNames: ["Total"],
    infoFundName: null,
    selectedFundNameToBuy: null,
    selectedFundNameToSell: null,
    numberOfSharesToBuy: null,
    numberOfSharesToSell: null,
  };
};

export default createInitialPortfolioState;
