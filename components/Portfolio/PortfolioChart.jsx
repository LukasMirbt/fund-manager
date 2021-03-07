import React, { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import useCalculateMinMaxValues from "../ChartWithTimeControls/Chart/useCalculateMinMaxValues";
import {
  getData,
  getIsDataInPercent,
  getIsDataDownsampled,
  getHiddenFunds,
  getPortfolioDateParameters,
} from "../../redux/selectors";
import { setPortfolioDateParameters } from "../../redux/portfolio/actionCreators";
import getChartDataset from "../ChartWithTimeControls/Chart/getChartDataset";
import { primaryColor } from "../theme";
import ChartWithTimeControls from "../ChartWithTimeControls/ChartWithTimeControls";

const PortfolioChart = ({ totalXData, totalYData, mainFundName }) => {
  const title = mainFundName.replace(/&amp;/g, "&");

  const [selectedButton, setSelectedButton] = useState(0);

  const portfolioDateParameters = useSelector((state) =>
    getPortfolioDateParameters(state)
  );

  const dispatch = useDispatch();

  const setDateParameters = (params) => {
    dispatch(setPortfolioDateParameters(params));
  };

  const data = useSelector((state) => getData(state));

  const isDataInPercent = useSelector((state) => getIsDataInPercent(state));
  const isDataDownsampled = useSelector((state) => getIsDataDownsampled(state));
  const hiddenFunds = useSelector((state) => getHiddenFunds(state));

  const datasetFundnames = [
    mainFundName,
    ...Object.keys(data).filter((key) => data[key].checked === true),
  ].filter((key) => hiddenFunds.includes(key) === false);

  const datasets = (() => {
    const datasetsWithoutTotal = datasetFundnames
      .filter((e) => e !== "Total")
      .map((key) =>
        getChartDataset(
          key,
          data[key].chartData.xData,
          data[key].chartData.yData,
          data,
          mainFundName,
          isDataInPercent,
          portfolioDateParameters,
          primaryColor,
          totalXData
        )
      );

    if (hiddenFunds.includes("Total")) {
      return datasetsWithoutTotal;
    }

    const totalDataset = getChartDataset(
      "Total",
      totalXData,
      totalYData,
      data,
      mainFundName,
      isDataInPercent,
      portfolioDateParameters,
      primaryColor,
      totalXData
    );

    return [...datasetsWithoutTotal, totalDataset];
  })();

  const { min, max } = useCalculateMinMaxValues(datasets, hiddenFunds);

  const [xData, yData] =
    mainFundName === "Total"
      ? [totalXData, totalYData]
      : [
          data[mainFundName].chartData.xData,
          data[mainFundName].chartData.yData,
        ];

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
      setDateParameters={setDateParameters}
      dateParameters={portfolioDateParameters}
      title={title}
    />
  );
};

export default PortfolioChart;
