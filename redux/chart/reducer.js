import {
  SET_DATE_PARAMETERS,
  SET_IS_DATA_DOWNSAMPLED,
  SET_IS_DATA_IN_PERCENT,
  SET_SELECTED_TIMESPAN,
  SET_IS_CHART_SHOWING,
  SET_ARE_PATTERNS_SHOWING,
  SET_IS_CHART_SHOWING_FOR_SMALL_SCREENS,
} from "./actionTypes";

const chart = (state = {}, action) => {
  switch (action.type) {
    case SET_DATE_PARAMETERS: {
      const newState = { ...state };
      newState.dateParameters = action.payload;
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
    case SET_SELECTED_TIMESPAN: {
      const newState = { ...state };
      newState.selectedTimespan = action.payload;
      return newState;
    }
    case SET_IS_CHART_SHOWING: {
      const newState = { ...state };
      newState.isChartShowing = action.payload;
      return newState;
    }
    case SET_ARE_PATTERNS_SHOWING: {
      const newState = { ...state };
      newState.arePatternsShowing = action.payload;
      return newState;
    }
    case SET_IS_CHART_SHOWING_FOR_SMALL_SCREENS: {
      const newState = { ...state };
      newState.isChartShowingForSmallScreens = action.payload;
      return newState;
    }
    default:
      return state;
  }
};

export default chart;
