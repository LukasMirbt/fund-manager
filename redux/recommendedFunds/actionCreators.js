import {
  SET_INITIAL_RECOMMENDED_FUNDS_STATE,
  SET_RECOMMENDED_DATE_PARAMETERS,
  SET_RECOMMENDED_FUND_NAME,
  SET_IS_RECOMMENDED_INTRO_SHOWING,
  SET_RECOMMENDED_TAB_VALUE,
} from "./actionTypes";

export const setInitialRecommendedFundsState = (update) => ({
  type: SET_INITIAL_RECOMMENDED_FUNDS_STATE,
  payload: update,
});

export const setRecommendedDateParameters = (update) => ({
  type: SET_RECOMMENDED_DATE_PARAMETERS,
  payload: update,
});

export const setRecommendedFundName = (update) => ({
  type: SET_RECOMMENDED_FUND_NAME,
  payload: update,
});

export const setIsRecommendedIntroShowing = (update) => ({
  type: SET_IS_RECOMMENDED_INTRO_SHOWING,
  payload: update,
});

export const setRecommendedTabValue = (update) => ({
  type: SET_RECOMMENDED_TAB_VALUE,
  payload: update,
});
