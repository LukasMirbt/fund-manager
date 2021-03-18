import {
  SET_PORTFOLIO,
  SET_BALANCE,
  BUY_FUND,
  SELL_FUND,
  SET_EXCHANGE_RATES,
  SET_INITIAL_PORTFOLIO_STATE,
  SET_PORTFOLIO_FUND_NAMES,
} from "./actionTypes";

export const setInitialPortfolioState = (update) => ({
  type: SET_INITIAL_PORTFOLIO_STATE,
  payload: update,
});

export const setPortfolio = (update) => ({
  type: SET_PORTFOLIO,
  payload: update,
});

export const buyFund = (update) => ({
  type: BUY_FUND,
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
