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
    general: { data, fundNamesCurrentlyBeingLoaded },
  } = state;

  const fundNames = fundNamesSelector(state);

  if (fundNames.includes(fundName) === true) {
    const newFundNames = fundNames.filter((name) => name !== fundName);
    dispatch(setFundNames(newFundNames));
  } else {
    if (data[fundName].chartData === undefined) {
      if (fundNamesCurrentlyBeingLoaded.includes(fundName) === true) {
        return;
      }
      dispatch(
        setFundNamesCurrentlyBeingLoaded([
          ...fundNamesCurrentlyBeingLoaded,
          fundName,
        ])
      );
      const chartData = await getChartData(fundName);
      const newData = { ...data };
      newData[fundName].chartData = chartData;
      const newFundNames = [...fundNames, fundName];

      batch(() => {
        dispatch(setFundNames(newFundNames));
        dispatch(setData(newData));
        dispatch(
          setFundNamesCurrentlyBeingLoaded(
            fundNamesCurrentlyBeingLoaded.filter((name) => name !== fundName)
          )
        );
      });
    } else {
      const newFundNames = [...fundNames, fundName];
      dispatch(setFundNames(newFundNames));
    }
  }
};

export default onFundSelect;
