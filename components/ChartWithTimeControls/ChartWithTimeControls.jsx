import React from "react";
import styled from "styled-components";
import TimeControls from "./TimeControls/TimeControls";
import Chart from "./Chart/Chart";
import { useSelector } from "react-redux";
import { getIsChartShowing } from "../../redux/selectors";

const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  ${({ sc: { containerCSS } }) => containerCSS};
`;

const ChartWithTimeControls = ({
  fundNames,
  /*   min,
  max, */

  containerCSS = undefined,
}) => {
  const isChartShowing = useSelector((state) => getIsChartShowing(state));
  return isChartShowing === true ? (
    <Container sc={{ containerCSS }}>
      <Chart
        fundNames={fundNames}
        /* min={min} max={max} */
      />

      <TimeControls />
    </Container>
  ) : null;
};

export default ChartWithTimeControls;
