import {
  SET_INITIAL_PORTFOLIO_STATE,
  SET_PORTFOLIO,
  SET_BALANCE,
  SET_EXCHANGE_RATES,
  SET_PORTFOLIO_FUND_NAMES,
  SET_INFO_FUND_NAME,
  SET_SELECTED_FUND_NAME_TO_BUY,
  SET_SELECTED_FUND_NAME_TO_SELL,
  SET_NUMBER_OF_SHARES_TO_BUY,
  SET_NUMBER_OF_SHARES_TO_SELL,
} from "./actionTypes";

const portfolio = (state = {}, action) => {
  switch (action.type) {
    case SET_INITIAL_PORTFOLIO_STATE: {
      const newState = { ...state, ...action.payload };
      return newState;
    }
    case SET_PORTFOLIO: {
      const newState = { ...state };
      newState.portfolio = action.payload;
      return newState;
    }
    case SET_BALANCE: {
      const newState = { ...state };
      newState.balance = action.payload;
      return newState;
    }
    case SET_PORTFOLIO_FUND_NAMES: {
      const newState = { ...state };
      newState.portfolioFundNames = action.payload;
      return newState;
    }
    case SET_INFO_FUND_NAME: {
      const newState = { ...state };
      newState.infoFundName = action.payload;
      return newState;
    }
    case SET_EXCHANGE_RATES: {
      const newState = { ...state };
      newState.exchangeRates = { ...action.payload };
      return newState;
    }
    case SET_SELECTED_FUND_NAME_TO_BUY: {
      const newState = { ...state };
      newState.selectedFundNameToBuy = action.payload;
      return newState;
    }
    case SET_SELECTED_FUND_NAME_TO_SELL: {
      const newState = { ...state };
      newState.selectedFundNameToSell = action.payload;
      return newState;
    }
    case SET_NUMBER_OF_SHARES_TO_BUY: {
      const newState = { ...state };
      newState.numberOfSharesToBuy = action.payload;
      return newState;
    }
    case SET_NUMBER_OF_SHARES_TO_SELL: {
      const newState = { ...state };
      newState.numberOfSharesToSell = action.payload;
      return newState;
    }
    default:
      return state;
  }
};

export default portfolio;
