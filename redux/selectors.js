export const getTableData = (state) => state.fundList.tableData;
export const getFundNames = (state) => state.fundList.fundNames;
export const getIsFundListShowing = (state) => state.fundList.isFundListShowing;

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
export const getPatterns = (state) => state.general.patterns;
export const getInitialOpenDrawerTabIndex = (state) =>
  state.general.initialOpenDrawerTabIndex;
export const getDateParameters = (state) => state.general.dateParameters;
export const getIsDataInPercent = (state) => state.general.isDataInPercent;
export const getIsDataDownsampled = (state) => state.general.isDataDownsampled;
export const getSelectedTimespan = (state) => state.general.selectedTimespan;
export const getIsChartShowing = (state) => state.general.isChartShowing;
export const getFundNamesCurrentlyBeingLoaded = (state) =>
  state.general.fundNamesCurrentlyBeingLoaded;
export const getSignInUsernameInputValue = (state) =>
  state.general.signInUsernameInputValue;
export const getSignInPasswordInputValue = (state) =>
  state.general.signInPasswordInputValue;
export const getSignUpUsernameInputValue = (state) =>
  state.general.signUpUsernameInputValue;
export const getSignUpPasswordInputValue = (state) =>
  state.general.signUpPasswordInputValue;
export const getIsSignInInvalid = (state) => state.general.isSignInInvalid;
export const getIsSignUpInvalid = (state) => state.general.isSignUpInvalid;
export const getIsSignUpShowing = (state) => state.general.isSignUpShowing;
export const getExchangeRates = (state) => state.general.exchangeRates;
export const getArePatternsShowing = (state) =>
  state.general.arePatternsShowing;
export const getSignInPasswordErrorMessage = (state) =>
  state.general.signInPasswordErrorMessage;
export const getSignUpPasswordErrorMessage = (state) =>
  state.general.signUpPasswordErrorMessage;
export const getSignInUsernameErrorMessage = (state) =>
  state.general.signInUsernameErrorMessage;
export const getSignUpUsernameErrorMessage = (state) =>
  state.general.signUpUsernameErrorMessage;
export const getIsUserRemembered = (state) => state.general.isUserRemembered;

export const getPortfolio = (state) => state.portfolio.portfolio;
export const getBalance = (state) => state.portfolio.balance;
export const getInitialPortfolioData = (state) =>
  state.portfolio.initialPortfolioData;
export const getInfoFundName = (state) => state.portfolio.infoFundName;
export const getPortfolioFundNames = (state) =>
  state.portfolio.portfolioFundNames;
export const getPortfolioData = (state) => state.portfolio.portfolioData;
export const getSelectedFundNameToBuy = (state) =>
  state.portfolio.selectedFundNameToBuy;
export const getSelectedFundNameToSell = (state) =>
  state.portfolio.selectedFundNameToSell;
export const getNumberOfSharesToBuy = (state) =>
  state.portfolio.numberOfSharesToBuy;
export const getNumberOfSharesToSell = (state) =>
  state.portfolio.numberOfSharesToSell;

export const getRecommendedFunds = (state) =>
  state.recommendedFunds.recommendedFunds;
export const getChartFundNames = (state) =>
  state.recommendedFunds.chartFundNames;
export const getIsIntroShowing = (state) =>
  state.recommendedFunds.isIntroShowing;
export const geTabValue = (state) => state.recommendedFunds.tabValue;
