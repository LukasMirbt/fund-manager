import React from "react";
import { css } from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import {
  getPortfolioDateParameters,
  getPortfolioFundNames,
} from "../../redux/selectors";
import { setPortfolioDateParameters } from "../../redux/portfolio/actionCreators";
import ChartWithTimeControls from "../ChartWithTimeControls/ChartWithTimeControls";

const containerCSS = css`
  width: 50%;
  height: 100%;
`;

const PortfolioChart = () => {
  /*   const title = mainFundName.replace(/&amp;/g, "&"); */

  const portfolioFundNames = useSelector((state) =>
    getPortfolioFundNames(state)
  );

  /* 
  const { min, max } = useCalculateMinMaxValues(datasets, hiddenFunds); */

  return (
    <ChartWithTimeControls
      fundNames={portfolioFundNames}
      /*       min={min}
      max={max} */
      containerCSS={containerCSS}
      /*  title={title} */
    />
  );
};

export default PortfolioChart;
