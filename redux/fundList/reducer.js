import {
  SET_INITIAL_FUND_LIST_STATE,
  SET_MAIN_FUND_NAME,
  SET_SEARCH_TERM,
  SET_SORT_PARAMETERS,
  SET_DATE_PARAMETERS,
  SET_IS_DATA_IN_PERCENT,
  SET_IS_DATA_DOWNSAMPLED,
  SET_IS_TABLE_HIDDEN,
  SET_IS_CHART_DATA_LOADING,
  TOGGLE_FUND_VISIBILITY,
} from "./actionTypes";

const fundList = (state = {}, action) => {
  switch (action.type) {
    case SET_INITIAL_FUND_LIST_STATE: {
      const newState = { ...state, ...action.payload };
      return newState;
    }
    case SET_MAIN_FUND_NAME: {
      const newState = { ...state };
      newState.mainFundName = action.payload;
      return newState;
    }
    case SET_SEARCH_TERM: {
      const newState = { ...state };
      newState.searchTerm = action.payload;
      return newState;
    }
    case SET_SORT_PARAMETERS: {
      const newState = { ...state };
      newState.sortParameters = { ...action.payload };
      return newState;
    }
    case SET_DATE_PARAMETERS: {
      const newState = { ...state };
      newState.dateParameters = { ...action.payload };
      return newState;
    }
    case SET_IS_DATA_DOWNSAMPLED: {
      const newState = { ...state };
      newState.isDataDownsampled = action.payload;
      return newState;
    }
    case SET_IS_DATA_IN_PERCENT: {
      const newState = { ...state };
      newState.isDataInPercent = action.payload;
      return newState;
    }
    case SET_IS_TABLE_HIDDEN: {
      const newState = { ...state };
      newState.isTableHidden = action.payload;
      return newState;
    }
    case TOGGLE_FUND_VISIBILITY: {
      const fundName = action.payload;
      const newState = { ...state };

      if (newState.hiddenFunds.includes(fundName)) {
        newState.hiddenFunds = newState.hiddenFunds.filter(
          (fName) => fName !== fundName
        );
        return newState;
      }
      newState.hiddenFunds = [...newState.hiddenFunds, fundName];
      return newState;
    }
    case SET_IS_CHART_DATA_LOADING: {
      const newState = { ...state };
      newState.isChartDataLoading = action.payload;
      return newState;
    }
    default:
      return state;
  }
};

export default fundList;
