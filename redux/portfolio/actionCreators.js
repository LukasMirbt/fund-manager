import {
  SET_PORTFOLIO,
  SET_BALANCE,
  BUY_FUND,
  SELL_FUND,
  SET_EXCHANGE_RATES,
  SET_INITIAL_PORTFOLIO_STATE,
  SET_PORTFOLIO_FUND_NAMES,
  SET_INFO_FUND_NAME,
  SET_SELECTED_FUND_NAME_TO_BUY,
  SET_SELECTED_FUND_NAME_TO_SELL,
  SET_NUMBER_OF_SHARES_TO_BUY,
  SET_NUMBER_OF_SHARES_TO_SELL,
} from "./actionTypes";

export const setInitialPortfolioState = (update) => ({
  type: SET_INITIAL_PORTFOLIO_STATE,
  payload: update,
});

export const setPortfolio = (update) => ({
  type: SET_PORTFOLIO,
  payload: update,
});

export const sellFund = (update) => ({
  type: SELL_FUND,
  payload: update,
});

export const setBalance = (update) => ({
  type: SET_BALANCE,
  payload: update,
});

export const setExchangeRates = (update) => ({
  type: SET_EXCHANGE_RATES,
  payload: update,
});

export const setPortfolioFundNames = (update) => ({
  type: SET_PORTFOLIO_FUND_NAMES,
  payload: update,
});

export const setInfoFundName = (update) => ({
  type: SET_INFO_FUND_NAME,
  payload: update,
});

export const setSelectedFundNameToBuy = (update) => ({
  type: SET_SELECTED_FUND_NAME_TO_BUY,
  payload: update,
});

export const setSelectedFundNameToSell = (update) => ({
  type: SET_SELECTED_FUND_NAME_TO_SELL,
  payload: update,
});

export const setNumberOfSharesToBuy = (update) => ({
  type: SET_NUMBER_OF_SHARES_TO_BUY,
  payload: update,
});

export const setNumberOfSharesToSell = (update) => ({
  type: SET_NUMBER_OF_SHARES_TO_SELL,
  payload: update,
});
