import React from "react";
import styled from "styled-components";
import TimeControls from "./TimeControls/TimeControls";
import Chart from "./Chart/Chart";

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
  return (
    <Container sc={{ containerCSS }}>
      <Chart
        fundNames={fundNames}
        /* min={min} max={max} */
      />

      <TimeControls
 
      />
    </Container>
  );
};

export default ChartWithTimeControls;
