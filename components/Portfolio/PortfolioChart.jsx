import React from "react";
import { useSelector } from "react-redux";
import { getPortfolioFundNames } from "../../redux/selectors";
import ChartWithTimeControls from "../ChartWithTimeControls/ChartWithTimeControls";

const containerCSS = `
  width: 50%;
  height: 100%;
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
