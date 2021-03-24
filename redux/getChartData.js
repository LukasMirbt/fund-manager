import axios from "axios";
import { batch } from "react-redux";
import {
  setData,
  setFundNamesCurrentlyBeingLoaded,
} from "./general/actionCreators";

const getChartData = (fundName, onLoadAction = () => {}) => async (
  dispatch,
  getState
) => {
  const {
    general: { data, fundNamesCurrentlyBeingLoaded },
  } = getState();

  if (fundNamesCurrentlyBeingLoaded.includes(fundName) === true) {
    return;
  } else {
    dispatch(
      setFundNamesCurrentlyBeingLoaded([
        ...fundNamesCurrentlyBeingLoaded,
        fundName,
      ])
    );
  }

  const replacedFundName = fundName.replace(/&amp;/g, "%26");
  const fundNameQuery = replacedFundName.split(" ").join("+");

  try {
    const chartData = (await axios.get(`/api/chartData/${fundNameQuery}`)).data;
    const newData = { ...data };
    newData[fundName].chartData = chartData;

    batch(() => {
      dispatch(setData(newData));
      dispatch(
        setFundNamesCurrentlyBeingLoaded(
          fundNamesCurrentlyBeingLoaded.filter((name) => name !== fundName)
        )
      );
      onLoadAction();
    });
  } catch (e) {
    console.log(e);
  }
};

export default getChartData;
