export const getMainFundName = (state) => state.fundList.mainFundName;
export const getTableData = (state) => state.fundList.tableData;
export const getIsChartDataLoading = (state) =>
  state.fundList.isChartDataLoading;
export const getSortParameters = (state) => state.fundList.sortParameters;
export const getDateParameters = (state) => state.fundList.dateParameters;
export const getSearchTerm = (state) => state.fundList.searchTerm;
export const getIsDataInPercent = (state) => state.fundList.isDataInPercent;
export const getIsDataDownsampled = (state) => state.fundList.isDataDownsampled;
export const getIsTableHidden = (state) => state.fundList.isTableHidden;
export const getHiddenFunds = (state) => state.fundList.hiddenFunds;
export const getColors = (state) => state.fundList.colors;

export const getCredentials = (state) => state.general.credentials;
export const getIsStateInitialized = (state) =>
  state.general.isStateInitialized;
export const getData = (state) => state.general.data;
export const getTabValue = (state) => state.general.tabValue;
export const getIsTemporaryDrawerOpen = (state) =>
  state.general.isTemporaryDrawerOpen;
export const getIsDrawerOpen = (state) => state.general.isDrawerOpen;
export const getAreDatasetsShowing = (state) =>
  state.general.areDatasetsShowing;
export const getIsSnackbarHidden = (state) => state.general.isSnackbarHidden;
export const getSnackbarText = (state) => state.general.snackbarText;
export const getSnackbarSeverity = (state) => state.general.snackbarSeverity;

export const getExchangeRates = (state) => state.portfolio.exchangeRates;
export const getPortfolio = (state) => state.portfolio.portfolio;
export const getBalance = (state) => state.portfolio.balance;
export const getPortfolioFundName = (state) =>
  state.portfolio.portfolioFundName;
export const getInitialPortfolioData = (state) =>
  state.portfolio.initialPortfolioData;
export const getPortfolioDateParameters = (state) =>
  state.portfolio.portfolioDateParameters;

export const getRecommendedFunds = (state) =>
  state.recommendedFunds.recommendedFunds;
export const getRecommendedFundName = (state) =>
  state.recommendedFunds.recommendedFundName;
export const getRecommendedDateParameters = (state) =>
  state.recommendedFunds.recommendedDateParameters;
export const getIsRecommendedIntroShowing = (state) =>
  state.recommendedFunds.isRecommendedIntroShowing;
export const getRecommendedTabValue = (state) =>
  state.recommendedFunds.recommendedTabValue;
