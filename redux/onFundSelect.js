import { batch } from "react-redux";
import getChartData from "./getChartData";
import { setData } from "./general/actionCreators";
import { setFundNamesCurrentlyBeingLoaded } from "./general/actionCreators";

export const onFundSelect = (
  fundName,
  fundNamesSelector,
  setFundNames
) => async (dispatch, getState) => {
  const state = getState();

  const {
    general: { data },
  } = state;

  const fundNames = fundNamesSelector(state);

  if (fundNames.includes(fundName) === true) {
    const newFundNames = fundNames.filter((name) => name !== fundName);
    dispatch(setFundNames(newFundNames));
  } else {
    const newFundNames = [...fundNames, fundName];
    if (data[fundName].chartData === undefined) {
      const onLoad = () => {
        dispatch(setFundNames(newFundNames));
      };
      dispatch(getChartData(fundName, onLoad));
    } else {
      dispatch(setFundNames(newFundNames));
    }
  }
};

export default onFundSelect;
