const createInitialPortfolioState = (userData) => {
  const { portfolio, balance } = userData;

  return {
    portfolio,
    balance,
    portfolioFundNames: ["Total"],
    infoFundName: Object.keys(portfolio)[0],

    selectedFundNameToBuy: null,
    selectedFundNameToSell: null,
    
    numberOfSharesToBuy: "",
    numberOfSharesToSell: "",
  };
};

export default createInitialPortfolioState;
