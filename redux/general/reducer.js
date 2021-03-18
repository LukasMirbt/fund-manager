import {
  SET_DATA,
  SET_CREDENTIALS,
  SET_IS_STATE_INITIALIZED,
  SET_IS_TEMPORARY_DRAWER_OPEN,
  SET_IS_DRAWER_OPEN,
  SET_ARE_DATASETS_SHOWING,
  SET_IS_SNACKBAR_HIDDEN,
  SET_SNACKBAR_TEXT,
  SHOW_NOTIFICATION,
  SET_SNACKBAR_SEVERITY,
  SET_INITIAL_OPEN_DRAWER_TAB_INDEX,
  SET_DATE_PARAMETERS,
  SET_IS_DATA_DOWNSAMPLED,
  SET_IS_DATA_IN_PERCENT,
  SET_FUND_NAMES_CURRENTLY_BEING_LOADED,
  SET_SELECTED_TIMESPAN,
  SET_FUND_DATA,
} from "./actionTypes";

const general = (state = {}, action) => {
  switch (action.type) {
    case SET_DATA: {
      const newState = { ...state };
      newState.data = { ...action.payload };
      return newState;
    }
    case SET_FUND_DATA: {
      const { fundName, fundData } = action.payload;
      const newState = { ...state };
      newState.data[fundName] = fundData;
      return newState;
    }
    case SET_CREDENTIALS: {
      const newState = { ...state };
      newState.credentials = { ...action.payload };
      return newState;
    }
    case SET_IS_STATE_INITIALIZED: {
      const newState = { ...state };
      newState.isStateInitialized = action.payload;
      return newState;
    }
    case SET_IS_DRAWER_OPEN: {
      const newState = { ...state };
      newState.isDrawerOpen = action.payload;
      return newState;
    }
    case SET_IS_TEMPORARY_DRAWER_OPEN: {
      const newState = { ...state };
      newState.isTemporaryDrawerOpen = action.payload;
      return newState;
    }
    case SET_ARE_DATASETS_SHOWING: {
      const newState = { ...state };
      newState.areDatasetsShowing = action.payload;
      return newState;
    }
    case SET_IS_SNACKBAR_HIDDEN: {
      const newState = { ...state };
      newState.isSnackbarHidden = action.payload;
      return newState;
    }
    case SET_SNACKBAR_TEXT: {
      const newState = { ...state };
      newState.snackbarText = action.payload;
      return newState;
    }
    case SET_SNACKBAR_SEVERITY: {
      const newState = { ...state };
      newState.snackbarSeverity = action.payload;
      return newState;
    }
    case SHOW_NOTIFICATION: {
      const { text, severity } = action.payload;
      const newState = { ...state };
      newState.snackbarText = text;
      newState.snackbarSeverity = severity;
      newState.isSnackbarHidden = false;
      return newState;
    }
    case SET_INITIAL_OPEN_DRAWER_TAB_INDEX: {
      const newState = { ...state };
      newState.initialOpenDrawerTabIndex = action.payload;
      return newState;
    }
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
    case SET_FUND_NAMES_CURRENTLY_BEING_LOADED: {
      const newState = { ...state };
      newState.fundNamesCurrentlyBeingLoaded = action.payload;
      return newState;
    }
    case SET_SELECTED_TIMESPAN: {
      const newState = { ...state };
      newState.selectedTimespan = action.payload;
      return newState;
    }
    default:
      return state;
  }
};

export default general;
