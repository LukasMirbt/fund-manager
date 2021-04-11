import getChartData from "./getChartData";

export const onFundSelect = ({
  fundName,
  fundNamesSelector,
  setFundNames,
  wasSelectionCancelledBeforeDataLoadedRef,
}) => async (dispatch, getState) => {
  const state = getState();

  const {
    general: { data, fundNamesCurrentlyBeingLoaded },
  } = state;

  const fundNames = fundNamesSelector(state);

  if (fundNamesCurrentlyBeingLoaded.includes(fundName) === true) {
    wasSelectionCancelledBeforeDataLoadedRef.current = true;
    return;
  }

  if (fundNames.includes(fundName) === true) {
    const newFundNames = fundNames.filter((name) => name !== fundName);
    dispatch(setFundNames(newFundNames));
  } else {
    const newFundNames = [...fundNames, fundName];

    if (data[fundName].chartData === undefined) {
      const onLoad = () => {
        if (wasSelectionCancelledBeforeDataLoadedRef.current === false) {
          dispatch(setFundNames(newFundNames));
        } else {
          wasSelectionCancelledBeforeDataLoadedRef.current = false;
        }
      };
      dispatch(getChartData(fundName, onLoad));
    } else {
      dispatch(setFundNames(newFundNames));
    }
  }
};

export default onFundSelect;
