import {
  SET_DATA,
  SET_CREDENTIALS,
  SET_IS_TEMPORARY_DRAWER_OPEN,
  SET_INITIAL_OPEN_DRAWER_TAB_INDEX,
  SET_FUND_NAMES_CURRENTLY_BEING_LOADED,
  SET_FUND_DATA,
  SET_FUND_NAME_LOADING,
  SET_FUND_NAME_HAS_LOADED,
  SET_ALERT_SETTINGS,
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

export const setIsTemporaryDrawerOpen = (update) => ({
  type: SET_IS_TEMPORARY_DRAWER_OPEN,
  payload: update,
});

export const setInitialOpenDrawerTabIndex = (update) => ({
  type: SET_INITIAL_OPEN_DRAWER_TAB_INDEX,
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

export const setAlertSettings = (update) => ({
  type: SET_ALERT_SETTINGS,
  payload: update,
});
