import React from "react";
import { css } from "styled-components";
import { useSelector } from "react-redux";
import { getChartFundNames } from "../../redux/selectors";
import ChartWithTimeControls from "../ChartWithTimeControls/ChartWithTimeControls";

const containerCSS = css`
  width: 100%;
  height: 100%;
`;

const RecommendedChart = () => {
  const fundNames = useSelector((state) => getChartFundNames(state));

  return (
    <ChartWithTimeControls fundNames={fundNames} containerCSS={containerCSS} />
  );
};

export default RecommendedChart;
