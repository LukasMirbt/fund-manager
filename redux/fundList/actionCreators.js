import {
  SET_INITIAL_FUND_LIST_STATE,
  SET_MAIN_FUND_NAME,
  SET_SEARCH_TERM,
  SET_SORT_PARAMETERS,
  SET_DATE_PARAMETERS,
  SET_IS_DATA_DOWNSAMPLED,
  SET_IS_DATA_IN_PERCENT,
  SET_IS_TABLE_HIDDEN,
  TOGGLE_FUND_VISIBILITY,
  SET_IS_CHART_DATA_LOADING,
} from "./actionTypes";

export const setInitialFundListState = (update) => ({
  type: SET_INITIAL_FUND_LIST_STATE,
  payload: update,
});

export const setMainFundName = (update) => ({
  type: SET_MAIN_FUND_NAME,
  payload: update,
});

export const setSearchTerm = (update) => ({
  type: SET_SEARCH_TERM,
  payload: update,
});

export const setSortParameters = (update) => ({
  type: SET_SORT_PARAMETERS,
  payload: update,
});

export const setDateParameters = (update) => ({
  type: SET_DATE_PARAMETERS,
  payload: update,
});

export const setIsDataDownsampled = (update) => ({
  type: SET_IS_DATA_DOWNSAMPLED,
  payload: update,
});

export const setIsDataInPercent = (update) => ({
  type: SET_IS_DATA_IN_PERCENT,
  payload: update,
});

export const setIsTableHidden = (update) => ({
  type: SET_IS_TABLE_HIDDEN,
  payload: update,
});

export const toggleFundVisibility = (update) => ({
  type: TOGGLE_FUND_VISIBILITY,
  payload: update,
});

export const setIsChartDataLoading = (update) => ({
  type: SET_IS_CHART_DATA_LOADING,
  payload: update,
});
