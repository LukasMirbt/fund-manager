import React, { useState } from "react";
import { css } from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import getChartDataset from "../ChartWithTimeControls/Chart/getChartDataset";
import useCalculateMinMaxValues from "../ChartWithTimeControls/Chart/useCalculateMinMaxValues";
import { primaryColor } from "../theme";
import { setRecommendedDateParameters } from "../../redux/recommendedFunds/actionCreators";
import {
  getData,
  getHiddenFunds,
  getIsDataDownsampled,
  getIsDataInPercent,
  getRecommendedDateParameters,
  getRecommendedFundName,
} from "../../redux/selectors";
import ChartWithTimeControls from "../ChartWithTimeControls/ChartWithTimeControls";

const containerCSS = css`
  width: 100%;
`;

const RecommendedChart = () => {
  const [selectedButton, setSelectedButton] = useState(0);

  const data = useSelector((state) => getData(state));

  const isDataInPercent = useSelector((state) => getIsDataInPercent(state));
  const isDataDownsampled = useSelector((state) => getIsDataDownsampled(state));
  const hiddenFunds = useSelector((state) => getHiddenFunds(state));

  const dispatch = useDispatch();

  const recommendedFundName = useSelector((state) =>
    getRecommendedFundName(state)
  );

  const recommendedDateParameters = useSelector((state) =>
    getRecommendedDateParameters(state)
  );

  const setDateParameters = (dateParams) => {
    dispatch(setRecommendedDateParameters(dateParams));
  };

  const datasetFundnames = [
    recommendedFundName,
    ...Object.keys(data).filter((key) => data[key].checked === true),
  ].filter((key) => hiddenFunds.includes(key) === false);

  const datasets = datasetFundnames.map((key) =>
    getChartDataset(
      key,
      data,
      recommendedFundName,
      isDataInPercent,
      recommendedDateParameters,
      primaryColor
    )
  );

  const { min, max } = useCalculateMinMaxValues(datasets, hiddenFunds);

  const { xData, yData } = data[recommendedFundName].chartData;

  return (
    <ChartWithTimeControls
      datasets={datasets}
      min={min}
      max={max}
      mainFundName={recommendedFundName}
      isDataDownsampled={isDataDownsampled}
      selectedButton={selectedButton}
      xData={xData}
      yData={yData}
      setSelectedButton={setSelectedButton}
      setDateParameters={setDateParameters}
      dateParameters={recommendedDateParameters}
      containerCSS={containerCSS}
    />
  );
};

export default RecommendedChart;
