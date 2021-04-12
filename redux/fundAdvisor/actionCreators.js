import {
  SET_INITIAL_RECOMMENDED_FUNDS_STATE,
  SET_RECOMMENDED_FUND_NAME,
  SET_IS_INTRO_SHOWING,
  SET_TAB_VALUE,
} from "./actionTypes";

export const setInitialRecommendedFundsState = (update) => ({
  type: SET_INITIAL_RECOMMENDED_FUNDS_STATE,
  payload: update,
});

export const setRecommendedFundName = (update) => ({
  type: SET_RECOMMENDED_FUND_NAME,
  payload: update,
});

export const setIsIntroShowing = (update) => ({
  type: SET_IS_INTRO_SHOWING,
  payload: update,
});

export const setRecommendedTabValue = (update) => ({
  type: SET_TAB_VALUE,
  payload: update,
});
