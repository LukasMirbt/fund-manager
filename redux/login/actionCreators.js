import {
  SET_CREDENTIALS,
  SET_SIGN_UP_USERNAME_INPUT_VALUE,
  SET_SIGN_UP_PASSWORD_INPUT_VALUE,
  SET_SIGN_IN_USERNAME_INPUT_VALUE,
  SET_SIGN_IN_PASSWORD_INPUT_VALUE,
  SET_IS_SIGN_IN_INVALID,
  SET_IS_SIGN_UP_INVALID,
  SET_IS_SIGN_UP_SHOWING,
  SET_SIGN_IN_PASSWORD_ERROR_MESSAGE,
  SET_SIGN_UP_PASSWORD_ERROR_MESSAGE,
  SET_SIGN_IN_USERNAME_ERROR_MESSAGE,
  SET_SIGN_UP_USERNAME_ERROR_MESSAGE,
  SET_IS_USER_REMEMBERED,
  RESET_SIGN_IN_STATE,
  RESET_SIGN_UP_STATE,
} from "./actionTypes";

export const setCredentials = (update) => ({
  type: SET_CREDENTIALS,
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

export const setSignInUsernameErrorMessage = (update) => ({
  type: SET_SIGN_IN_USERNAME_ERROR_MESSAGE,
  payload: update,
});

export const setSignUpUsernameErrorMessage = (update) => ({
  type: SET_SIGN_UP_USERNAME_ERROR_MESSAGE,
  payload: update,
});

export const setSignInPasswordErrorMessage = (update) => ({
  type: SET_SIGN_IN_PASSWORD_ERROR_MESSAGE,
  payload: update,
});

export const setSignUpPasswordErrorMessage = (update) => ({
  type: SET_SIGN_UP_PASSWORD_ERROR_MESSAGE,
  payload: update,
});

export const setIsUserRemembered = (update) => ({
  type: SET_IS_USER_REMEMBERED,
  payload: update,
});

export const resetSignInState = () => ({
  type: RESET_SIGN_IN_STATE,
});

export const resetSignUpState = () => ({
  type: RESET_SIGN_UP_STATE,
});
