const createInitialPortfolioState = (initialData) => {
  const { exchangeRates, portfolio, portfolioData } = initialData;

  return {
    exchangeRates,
    portfolio,
    portfolioData,
    portfolioFundNames: ["Total"],
  };
};

export default createInitialPortfolioState;
