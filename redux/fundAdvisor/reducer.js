import { SET_RECOMMENDED_FUND_NAME } from "./actionTypes";

const recommendedFunds = (state = {}, action) => {
  switch (action.type) {
    case SET_RECOMMENDED_FUND_NAME: {
      const newState = { ...state };
      newState.recommendedFundName = action.payload;
      return newState;
    }

    default:
      return state;
  }
};

export default recommendedFunds;
