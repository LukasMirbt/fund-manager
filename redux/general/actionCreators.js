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
  SET_IS_CHART_SHOWING,
  SET_FUND_NAME_LOADING,
  SET_FUND_NAME_HAS_LOADED,
  SET_SIGN_UP_USERNAME_INPUT_VALUE,
  SET_SIGN_UP_PASSWORD_INPUT_VALUE,
  SET_SIGN_IN_USERNAME_INPUT_VALUE,
  SET_SIGN_IN_PASSWORD_INPUT_VALUE,
  SET_IS_SIGN_IN_INVALID,
  SET_IS_SIGN_UP_INVALID,
  SET_IS_SIGN_UP_SHOWING,
} from "./actionTypes";

export const setData = (update) => ({
  type: SET_DATA,
  payload: update,
});

export const setFundData = (update) => ({
  type: SET_FUND_DATA,
  payload: update,
});

export const setCredentials = (update) => ({
  type: SET_CREDENTIALS,
  payload: update,
});

export const setIsStateInitialized = (update) => ({
  type: SET_IS_STATE_INITIALIZED,
  payload: update,
});

export const setIsTemporaryDrawerOpen = (update) => ({
  type: SET_IS_TEMPORARY_DRAWER_OPEN,
  payload: update,
});

export const setIsDrawerOpen = (update) => ({
  type: SET_IS_DRAWER_OPEN,
  payload: update,
});

export const setAreDatasetsShowing = (update) => ({
  type: SET_ARE_DATASETS_SHOWING,
  payload: update,
});

export const setIsSnackbarHidden = (update) => ({
  type: SET_IS_SNACKBAR_HIDDEN,
  payload: update,
});

export const setSnackbarText = (update) => ({
  type: SET_SNACKBAR_TEXT,
  payload: update,
});

export const setSnackbarSeverity = (update) => ({
  type: SET_SNACKBAR_SEVERITY,
  payload: update,
});

export const showNotification = (update) => ({
  type: SHOW_NOTIFICATION,
  payload: update,
});

export const setInitialOpenDrawerTabIndex = (update) => ({
  type: SET_INITIAL_OPEN_DRAWER_TAB_INDEX,
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

export const setFundNamesCurrentlyBeingLoaded = (update) => ({
  type: SET_FUND_NAMES_CURRENTLY_BEING_LOADED,
  payload: update,
});

export const setFundNameLoading = (update) => ({
  type: SET_FUND_NAME_LOADING,
  payload: update,
});

export const setFundNameHasLoaded = (update) => ({
  type: SET_FUND_NAME_HAS_LOADED,
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

export const setSignInUsernameInputValue = (update) => ({
  type: SET_SIGN_IN_USERNAME_INPUT_VALUE,
  payload: update,
});

export const setSignInPasswordInputValue = (update) => ({
  type: SET_SIGN_IN_PASSWORD_INPUT_VALUE,
  payload: update,
});

export const setSignUpUsernameInputValue = (update) => ({
  type: SET_SIGN_UP_USERNAME_INPUT_VALUE,
  payload: update,
});

export const setSignUpPasswordInputValue = (update) => ({
  type: SET_SIGN_UP_PASSWORD_INPUT_VALUE,
  payload: update,
});

export const setIsSignInInvalid = (update) => ({
  type: SET_IS_SIGN_IN_INVALID,
  payload: update,
});

export const setIsSignUpInvalid = (update) => ({
  type: SET_IS_SIGN_UP_INVALID,
  payload: update,
});

export const setIsSignUpShowing = (update) => ({
  type: SET_IS_SIGN_UP_SHOWING,
  payload: update,
});
