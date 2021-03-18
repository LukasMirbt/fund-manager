import { SET_FUND_NAMES, SET_IS_FUND_LIST_SHOWING } from "./actionTypes";

export const setFundNames = (update) => ({
  type: SET_FUND_NAMES,
  payload: update,
});

export const setIsFundListShowing = (update) => ({
  type: SET_IS_FUND_LIST_SHOWING,
  payload: update,
});
