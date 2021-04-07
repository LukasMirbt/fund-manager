const createInitialPortfolioState = (userData) => {
  const { portfolio, balance } = userData;

  const isPortfolioEmpty = Object.keys(portfolio).length === 0;

  return {
    portfolio,
    balance,
    portfolioFundNames: isPortfolioEmpty === true ? [] : ["Total"],
    infoFundName: isPortfolioEmpty === true ? null : Object.keys(portfolio)[0],

    selectedFundNameToBuy: null,
    selectedFundNameToSell: null,

    numberOfSharesToBuy: "",
    numberOfSharesToSell: "",

    isBuyFundDialogOpen: false,
    isSellFundDialogOpen: false,
  };
};

export default createInitialPortfolioState;
