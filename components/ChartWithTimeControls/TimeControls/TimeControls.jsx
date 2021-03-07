import React, { useMemo } from "react";
import styled from "styled-components";
import TimeButton from "./TimeButton";
import getDataChange from "./getDataChange";

const timespansInYears = [0.5, 1, 3, 5, 0];

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
`;

const TimeControls = ({ xData, yData, setDateParameters, dateParameters }) => {
  const { start, end } = dateParameters;
  const changeOverTimeValues = {};

  const timespanOfData = new Date(xData[xData.length - 1]) - new Date(xData[0]);

  timespansInYears.forEach((length) => {
    changeOverTimeValues[length] = getDataChange(length, xData, yData);
  });

  const selectedButton = useMemo(() => {
    const firstDate = xData[0];
    const lastDate = xData[xData.length - 1];
    if (start <= firstDate && end >= lastDate) {
      return 0;
    }
    if (start === undefined && end === undefined) {
      return 0;
    }
    if (end - start === 0.5 * 31104000000) {
      return 0.5;
    }
    if (end - start === 1 * 31104000000) {
      return 1;
    }
    if (end - start === 3 * 31104000000) {
      return 3;
    }
    if (end - start === 5 * 31104000000) {
      return 5;
    }
    return undefined;
  }, [start, end, xData]);

  return (
    <Container>
      {timespansInYears.map((length) => (
        <TimeButton
          setDateParameters={setDateParameters}
          key={length}
          timespanOfData={timespanOfData}
          lengthPercentageChange={changeOverTimeValues[length]}
          length={length}
          selectedButton={selectedButton}
        />
      ))}
    </Container>
  );
};

export default TimeControls;
