import React from "react";
import { css } from "styled-components";
import { useSelector } from "react-redux";
import { getPortfolioFundNames } from "../../redux/selectors";
import ChartWithTimeControls from "../ChartWithTimeControls/ChartWithTimeControls";

const containerCSS = css`
  width: 100%;
  height: 60%;
  min-height: 500px;
  border-bottom: ${({ theme }) => `1px solid ${theme.palette.divider}`};

  ${({ theme }) => css`
    @media screen and (min-width: ${`${theme.breakpoints.values["lg"]}px`}) {
      width: 50%;
      height: 100%;
      border-bottom: unset;
    }
  `}
`;

const PortfolioChart = () => {
  const portfolioFundNames = useSelector((state) =>
    getPortfolioFundNames(state)
  );

  return (
    <ChartWithTimeControls
      fundNames={portfolioFundNames}
      containerCSS={containerCSS}
    />
  );
};

export default PortfolioChart;
