import React from "react";
import styled from "styled-components";
import TimeControls from "./TimeControls/TimeControls";
import Chart from "./Chart/Chart";
import Title from "./Title";

const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  flex-grow: 1;
`;

const ChartWithTimeControls = ({
  datasets,
  min,
  max,
  mainFundName,
  isDataDownsampled,
  selectedButton,
  xData,
  yData,
  setSelectedButton,
  setDateParameters,
  dateParameters,
  title,
  containerCSS = undefined,
}) => {
  return (
    <Container sc={{ containerCSS }}>
      {title !== undefined && <Title title={title} />}

      <Chart
        datasets={datasets}
        min={min}
        max={max}
        mainFundName={mainFundName}
        isDataDownsampled={isDataDownsampled}
      />

      <TimeControls
        selectedButton={selectedButton}
        xData={xData}
        yData={yData}
        setSelectedButton={setSelectedButton}
        setDateParameters={setDateParameters}
        dateParameters={dateParameters}
      />
    </Container>
  );
};

export default ChartWithTimeControls;
