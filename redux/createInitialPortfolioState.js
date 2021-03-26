const createInitialPortfolioState = (userData) => {
  const { portfolio, balance } = userData;

  return {
    portfolio,
    balance,
    portfolioFundNames: ["Total"],
    infoFundName: null,
    selectedFundNameToBuy: null,
    selectedFundNameToSell: null,
    numberOfSharesToBuy: "",
    numberOfSharesToSell: "",
  };
};

export default createInitialPortfolioState;
