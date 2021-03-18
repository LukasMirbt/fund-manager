import React from "react";
import Button from "@material-ui/core/Button";
import styled, { css } from "styled-components";
import { END_DATE, START_DATE } from "../../../utils/constants";
import { subMonths } from "date-fns";

const StyledButton = styled(Button)`
  /*   width: 6.25rem;
  height: 3.125rem;
  margin: 0 0.5rem;
  padding: 0.25rem;
  background-color: white; */
`;

const Column = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const displayStrings = {
  max: "Max",
  0.5: "6 months",
  1: "1 year",
  3: "3 years",
  5: "5 years",
};

const TimeButton = ({
  /*   timespanOfData,
  lengthPercentageChange, */
  selectedButton,
  length,
  setDateParameters,
  dateParameters,
}) => {
  /*   const title = displayStrings[length];

  const change = `${lengthPercentageChange}%`; */

  const isDisabled = false;

  return (
    <StyledButton
      sc={{ isSelected: selectedButton === length }}
      onClick={() => {
        if (selectedButton === length) {
          return;
        }
        if (length === "max") {
          setDateParameters({
            start: START_DATE,
            end: END_DATE,
          });
        } else {
          setDateParameters({
            start: subMonths(END_DATE, length * 12),
            end: END_DATE,
          });
        }
      }}
      /*    disabled={isDisabled} */
    >
      {isDisabled ? <span>-</span> : <Column>{displayStrings[length]}</Column>}
    </StyledButton>
  );
};

export default TimeButton;
