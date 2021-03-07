import {
  SET_INITIAL_PORTFOLIO_STATE,
  SET_PORTFOLIO,
  BUY_FUND,
  SET_BALANCE,
  SELL_FUND,
  SET_EXCHANGE_RATES,
  SET_PORTFOLIO_FUND_NAME,
  SET_PORTFOLIO_DATE_PARAMETERS,
} from "./actionTypes";

export const DEFAULT_STATE = {
  exchangeRates: undefined,
  portfolio: undefined,
  balance: undefined,
  initialPortfolioData: undefined,
  initialPortfolioTableData: undefined,
  portfolioFundName: undefined,
  portfolioDateParameters: { start: undefined, end: undefined },
};

const portfolio = (state = DEFAULT_STATE, action) => {
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
    case SET_PORTFOLIO_FUND_NAME: {
      const newState = { ...state };
      newState.portfolioFundName = action.payload;
      return newState;
    }
    case SET_EXCHANGE_RATES: {
      const newState = { ...state };
      newState.exchangeRates = { ...action.payload };
      return newState;
    }
    case SET_PORTFOLIO_DATE_PARAMETERS: {
      const newState = { ...state };
      newState.portfolioDateParameters = { ...action.payload };
      return newState;
    }
    case BUY_FUND: {
      const newState = { ...state };
      const { shares, fundName, buyDate, NAV } = action.payload;
      if (newState.portfolioFundName === "") {
        newState.portfolioFundName = fundName;
      }
      if (newState.portfolio[fundName] !== undefined) {
        newState.portfolio = {
          ...newState.portfolio,
          [fundName]: [...newState.portfolio[fundName], [shares, buyDate]],
        };
      } else {
        newState.portfolio = {
          ...newState.portfolio,
          [fundName]: [[shares, buyDate]],
        };
      }
      newState.balance -= shares * NAV;
      return newState;
    }
    case SELL_FUND: {
      const newState = { ...state, portfolio: { ...state.portfolio } };
      const { shares, availableShares, fundName, value } = action.payload;

      if (shares === availableShares) {
        delete newState.portfolio[fundName];
        newState.balance += value;
        if (
          newState.portfolioFundName === fundName ||
          newState.portfolioFundName === "Total"
        ) {
          if (Object.keys(newState.portfolio).length === 0) {
            newState.portfolioFundName = "";
          } else {
            [newState.portfolioFundName] = Object.keys(newState.portfolio);
          }
        }
        return newState;
      }

      if (newState.portfolio[fundName].length === 1) {
        newState.balance += value;
        newState.portfolio[fundName][0][0] -= shares;
        return newState;
      }

      const [shareAccumulator, indexToSlice] = newState.portfolio[
        fundName
      ].reduce(
        (acc, cur, idx) => {
          const [sharesBoughtAtBuyDate, buyDate] = cur;
          const [shareAcc, index] = acc;

          return [
            shareAcc + sharesBoughtAtBuyDate,
            shareAcc + sharesBoughtAtBuyDate >= shares ? idx : undefined,
          ];
        },
        [0, undefined]
      );

      const sharesToRemoveFromLastItem = shares - shareAccumulator;

      newState.portfolio[fundName] = newState.portfolio[fundName].slice(
        0,
        indexToSlice
      );
      const lastItem = newState.portfolio[fundName].length - 1;

      newState.portfolio[fundName][lastItem] = [
        newState.portfolio[fundName][lastItem][0] - sharesToRemoveFromLastItem,
        newState.portfolio[fundName][lastItem][1],
      ];

      newState.balance += value;
      return newState;
    }
    default:
      return state;
  }
};

export default portfolio;
