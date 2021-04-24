import {
  SET_DATE_PARAMETERS,
  SET_IS_DATA_DOWNSAMPLED,
  SET_IS_DATA_IN_PERCENT,
  SET_SELECTED_TIMESPAN,
  SET_IS_CHART_SHOWING,
  SET_ARE_PATTERNS_SHOWING,
  SET_IS_CHART_SHOWING_FOR_SMALL_SCREENS,
} from "./actionTypes";

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

export const setSelectedTimespan = (update) => ({
  type: SET_SELECTED_TIMESPAN,
  payload: update,
});

export const setIsChartShowing = (update) => ({
  type: SET_IS_CHART_SHOWING,
  payload: update,
});

export const setArePatternsShowing = (update) => ({
  type: SET_ARE_PATTERNS_SHOWING,
  payload: update,
});

export const setIsChartShowingForSmallScreens = (update) => ({
  type: SET_IS_CHART_SHOWING_FOR_SMALL_SCREENS,
  payload: update,
});
