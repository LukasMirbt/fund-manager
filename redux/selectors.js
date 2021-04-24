//fundList
export const getTableData = (state) => state.fundList.tableData;
export const getFundNames = (state) => state.fundList.fundNames;
export const getIsFundListShowing = (state) => state.fundList.isFundListShowing;

//general
export const getData = (state) => state.general.data;
export const getIsTemporaryDrawerOpen = (state) =>
  state.general.isTemporaryDrawerOpen;
export const getInitialOpenDrawerTabIndex = (state) =>
  state.general.initialOpenDrawerTabIndex;
export const getFundNamesCurrentlyBeingLoaded = (state) =>
  state.general.fundNamesCurrentlyBeingLoaded;
export const getExchangeRates = (state) => state.general.exchangeRates;
export const getAlertSettings = (state) => state.general.alertSettings;

//portfolio
export const getPortfolio = (state) => state.portfolio.portfolio;
export const getBalance = (state) => state.portfolio.balance;
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
export const getIsBuyFundDialogOpen = (state) =>
  state.portfolio.isBuyFundDialogOpen;
export const getIsSellFundDialogOpen = (state) =>
  state.portfolio.isSellFundDialogOpen;

//fundAdvisor
export const getRecommendedFunds = (state) =>
  state.fundAdvisor.recommendedFunds;

//chart
export const getIsChartShowingForSmallScreens = (state) =>
  state.chart.isChartShowingForSmallScreens;
export const getPatterns = (state) => state.chart.patterns;
export const getDateParameters = (state) => state.chart.dateParameters;
export const getIsDataInPercent = (state) => state.chart.isDataInPercent;
export const getIsDataDownsampled = (state) => state.chart.isDataDownsampled;
export const getSelectedTimespan = (state) => state.chart.selectedTimespan;
export const getIsChartShowing = (state) => state.chart.isChartShowing;
export const getArePatternsShowing = (state) => state.chart.arePatternsShowing;

//login
export const getIsUserRemembered = (state) => state.login.isUserRemembered;
export const getCredentials = (state) => state.login.credentials;
export const getSignInUsernameInputValue = (state) =>
  state.login.signInUsernameInputValue;
export const getSignInPasswordInputValue = (state) =>
  state.login.signInPasswordInputValue;
export const getSignUpUsernameInputValue = (state) =>
  state.login.signUpUsernameInputValue;
export const getSignUpPasswordInputValue = (state) =>
  state.login.signUpPasswordInputValue;
export const getIsSignInInvalid = (state) => state.login.isSignInInvalid;
export const getIsSignUpInvalid = (state) => state.login.isSignUpInvalid;
export const getIsSignUpShowing = (state) => state.login.isSignUpShowing;
export const getSignInPasswordErrorMessage = (state) =>
  state.login.signInPasswordErrorMessage;
export const getSignUpPasswordErrorMessage = (state) =>
  state.login.signUpPasswordErrorMessage;
export const getSignInUsernameErrorMessage = (state) =>
  state.login.signInUsernameErrorMessage;
export const getSignUpUsernameErrorMessage = (state) =>
  state.login.signUpUsernameErrorMessage;
