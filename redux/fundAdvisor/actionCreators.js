import { SET_RECOMMENDED_FUND_NAME } from "./actionTypes";

export const setRecommendedFundName = (update) => ({
  type: SET_RECOMMENDED_FUND_NAME,
  payload: update,
});
