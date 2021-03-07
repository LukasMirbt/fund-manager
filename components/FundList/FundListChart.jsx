import React, { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import getChartDataset from "../ChartWithTimeControls/Chart/getChartDataset";
import useCalculateMinMaxValues from "../ChartWithTimeControls/Chart/useCalculateMinMaxValues";
import {
  getData,
  getIsDataInPercent,
  getIsDataDownsampled,
  getHiddenFunds,
  getMainFundName,
  getDateParameters,
} from "../../redux/selectors";
import { setDateParameters } from "../../redux/fundList/actionCreators";
import { primaryColor } from "../theme";
import ChartWithTimeControls from "../ChartWithTimeControls/ChartWithTimeControls";

const FundListChart = () => {
  const mainFundName = useSelector((state) => getMainFundName(state));

  const title = mainFundName.replace(/&amp;/g, "&");

  const [selectedButton, setSelectedButton] = useState(0);

  const dispatch = useDispatch();

  const data = useSelector((state) => getData(state));

  const dateParameters = useSelector((state) => getDateParameters(state));

  const setDateParams = (dateParams) => {
    dispatch(setDateParameters(dateParams));
  };

  const isDataInPercent = useSelector((state) => getIsDataInPercent(state));
  const isDataDownsampled = useSelector((state) => getIsDataDownsampled(state));
  const hiddenFunds = useSelector((state) => getHiddenFunds(state));

  const datasetFundnames = [
    mainFundName,
    ...Object.keys(data).filter((key) => data[key].checked === true),
  ].filter((key) => hiddenFunds.includes(key) === false);

  const datasets = datasetFundnames.map((key) =>
    getChartDataset(
      key,
      data,
      mainFundName,
      isDataInPercent,
      dateParameters,
      primaryColor
    )
  );

  const { min, max } = useCalculateMinMaxValues(datasets, hiddenFunds);

  const { xData, yData } = data[mainFundName].chartData;

  return (
    <ChartWithTimeControls
      datasets={datasets}
      min={min}
      max={max}
      mainFundName={mainFundName}
      isDataDownsampled={isDataDownsampled}
      selectedButton={selectedButton}
      xData={xData}
      yData={yData}
      setSelectedButton={setSelectedButton}
      setDateParameters={setDateParams}
      dateParameters={dateParameters}
      title={title}
    />
  );
};

export default FundListChart;
