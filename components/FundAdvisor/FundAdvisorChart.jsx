import React from "react";
import { css } from "styled-components";
import { useSelector } from "react-redux";
import { getRecommendedFunds } from "../../redux/selectors";
import ChartWithTimeControls from "../ChartWithTimeControls/ChartWithTimeControls";

const containerCSS = css`
  width: 100%;
  height: 100%;
  min-height: 500px;

  ${({ theme }) => css`
    @media screen and (min-width: ${`${theme.breakpoints.values["lg"]}px`}) {
      width: 50%;
      height: 100%;
      border-right: ${({ theme }) => `1px solid ${theme.palette.divider}`};
    }
  `}
`;

const FundAdvisorChart = ({ fundIndex }) => {
  const recommendedFunds = useSelector((state) => getRecommendedFunds(state));

  return (
    <ChartWithTimeControls
      fundNames={[recommendedFunds[fundIndex][0]]}
      containerCSS={containerCSS}
    />
  );
};

export default FundAdvisorChart;
