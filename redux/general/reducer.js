import {
  SET_DATA,
  SET_CREDENTIALS,
  SET_IS_TEMPORARY_DRAWER_OPEN,
  SET_INITIAL_OPEN_DRAWER_TAB_INDEX,
  SET_FUND_NAMES_CURRENTLY_BEING_LOADED,
  SET_FUND_DATA,
  SET_FUND_NAME_LOADING,
  SET_FUND_NAME_HAS_LOADED,
  SET_SIGN_IN_PASSWORD_INPUT_VALUE,
  SET_SIGN_IN_USERNAME_INPUT_VALUE,
  SET_SIGN_UP_PASSWORD_INPUT_VALUE,
  SET_SIGN_UP_USERNAME_INPUT_VALUE,
  SET_IS_SIGN_IN_INVALID,
  SET_IS_SIGN_UP_INVALID,
  SET_IS_SIGN_UP_SHOWING,
  SET_SIGN_IN_PASSWORD_ERROR_MESSAGE,
  SET_SIGN_UP_PASSWORD_ERROR_MESSAGE,
  SET_SIGN_IN_USERNAME_ERROR_MESSAGE,
  SET_SIGN_UP_USERNAME_ERROR_MESSAGE,
  SET_IS_USER_REMEMBERED,
  SET_ALERT_SETTINGS,
  RESET_SIGN_IN_STATE,
  RESET_SIGN_UP_STATE,
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
    case SET_IS_TEMPORARY_DRAWER_OPEN: {
      const newState = { ...state };
      newState.isTemporaryDrawerOpen = action.payload;
      return newState;
    }
    case SET_INITIAL_OPEN_DRAWER_TAB_INDEX: {
      const newState = { ...state };
      newState.initialOpenDrawerTabIndex = action.payload;
      return newState;
    }
    case SET_FUND_NAMES_CURRENTLY_BEING_LOADED: {
      const newState = { ...state };
      newState.fundNamesCurrentlyBeingLoaded = action.payload;
      return newState;
    }
    case SET_FUND_NAME_LOADING: {
      const newState = { ...state };
      newState.fundNamesCurrentlyBeingLoaded = [
        ...state.fundNamesCurrentlyBeingLoaded,
        action.payload,
      ];
      return newState;
    }
    case SET_FUND_NAME_HAS_LOADED: {
      const newState = { ...state };
      newState.fundNamesCurrentlyBeingLoaded = state.fundNamesCurrentlyBeingLoaded.filter(
        (name) => name !== action.payload
      );
      return newState;
    }
    case SET_SIGN_IN_USERNAME_INPUT_VALUE: {
      const newState = { ...state };
      newState.signInUsernameInputValue = action.payload;
      return newState;
    }
    case SET_SIGN_IN_PASSWORD_INPUT_VALUE: {
      const newState = { ...state };
      newState.signInPasswordInputValue = action.payload;
      return newState;
    }
    case SET_SIGN_UP_USERNAME_INPUT_VALUE: {
      const newState = { ...state };
      newState.signUpUsernameInputValue = action.payload;
      return newState;
    }
    case SET_SIGN_UP_PASSWORD_INPUT_VALUE: {
      const newState = { ...state };
      newState.signUpPasswordInputValue = action.payload;
      return newState;
    }
    case SET_IS_SIGN_IN_INVALID: {
      const newState = { ...state };
      newState.isSignInInvalid = action.payload;
      return newState;
    }
    case SET_IS_SIGN_UP_INVALID: {
      const newState = { ...state };
      newState.isSignUpInvalid = action.payload;
      return newState;
    }
    case SET_IS_SIGN_UP_SHOWING: {
      const newState = { ...state };
      newState.isSignUpShowing = action.payload;
      return newState;
    }
    case SET_SIGN_IN_PASSWORD_ERROR_MESSAGE: {
      const newState = { ...state };
      newState.signInPasswordErrorMessage = action.payload;
      return newState;
    }
    case SET_SIGN_UP_PASSWORD_ERROR_MESSAGE: {
      const newState = { ...state };
      newState.signUpPasswordErrorMessage = action.payload;
      return newState;
    }
    case SET_SIGN_IN_USERNAME_ERROR_MESSAGE: {
      const newState = { ...state };
      newState.signInUsernameErrorMessage = action.payload;
      return newState;
    }
    case SET_SIGN_UP_USERNAME_ERROR_MESSAGE: {
      const newState = { ...state };
      newState.signUpUsernameErrorMessage = action.payload;
      return newState;
    }
    case SET_IS_USER_REMEMBERED: {
      const newState = { ...state };
      newState.isUserRemembered = action.payload;
      return newState;
    }
    case SET_ALERT_SETTINGS: {
      const newState = { ...state };
      newState.alertSettings = { ...state.alertSettings, ...action.payload };
      return newState;
    }
    case RESET_SIGN_IN_STATE: {
      const newState = { ...state };
      newState.signInUsernameInputValue = "";
      newState.signInPasswordInputValue = "";
      newState.signInUsernameErrorMessage = null;
      newState.signInPasswordErrorMessage = null;
      return newState;
    }
    case RESET_SIGN_UP_STATE: {
      const newState = { ...state };
      newState.signUpUsernameInputValue = "";
      newState.signUpPasswordInputValue = "";
      newState.signUpUsernameErrorMessage = null;
      newState.signUpPasswordErrorMessage = null;
      return newState;
    }
    default:
      return state;
  }
};

export default general;
