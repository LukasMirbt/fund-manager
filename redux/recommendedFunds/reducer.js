import {
  SET_INITIAL_RECOMMENDED_FUNDS_STATE,
  SET_RECOMMENDED_FUND_NAME,
  SET_IS_RECOMMENDED_INTRO_SHOWING,
  SET_RECOMMENDED_DATE_PARAMETERS,
  SET_RECOMMENDED_TAB_VALUE,
} from "./actionTypes";

const recommendedFunds = (state = {}, action) => {
  switch (action.type) {
    case SET_INITIAL_RECOMMENDED_FUNDS_STATE: {
      const newState = { ...state, ...action.payload };
      return newState;
    }
    case SET_RECOMMENDED_FUND_NAME: {
      const newState = { ...state };
      newState.recommendedFundName = action.payload;
      return newState;
    }
    case SET_IS_RECOMMENDED_INTRO_SHOWING: {
      const newState = { ...state };
      newState.isRecommendedIntroShowing = action.payload;
      return newState;
    }
    case SET_RECOMMENDED_DATE_PARAMETERS: {
      const newState = { ...state };
      newState.recommendedDateParameters = { ...action.payload };
      return newState;
    }
    case SET_RECOMMENDED_TAB_VALUE: {
      const newState = { ...state };
      newState.recommendedTabValue = action.payload;
      return newState;
    }
    default:
      return state;
  }
};

export default recommendedFunds;
