import { SET_FUND_NAMES, SET_IS_FUND_LIST_SHOWING } from "./actionTypes";

const fundList = (state = {}, action) => {
  switch (action.type) {
    case SET_FUND_NAMES: {
      const newState = { ...state };
      newState.fundNames = action.payload;
      return newState;
    }
    case SET_IS_FUND_LIST_SHOWING: {
      const newState = { ...state };
      newState.isFundListShowing = action.payload;
      return newState;
    }
    default:
      return state;
  }
};

export default fundList;
