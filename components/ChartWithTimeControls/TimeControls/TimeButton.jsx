import React from "react";
import Button from "@material-ui/core/Button";
import styled, { css } from "styled-components";

const StyledButton = styled(Button)`
  width: 6.25rem;
  border: none;
  height: 3.4375rem;
  margin: 0.3125rem;
  display: flex;
  padding: 0.1875rem;
  align-items: center;
  border-radius: 4px;
  flex-direction: column;
  justify-content: center;

  ${({ sc: { isSelected }, theme: { shadows } }) => css`
    box-shadow: ${isSelected === true ? shadows[1] : shadows[2]};
    background-color: ${isSelected === true ? "rgb(0, 0, 0, 0.12)" : "white"};

    &:hover {
      background-color: ${isSelected === true
        ? "rgb(0, 0, 0, 0.2)"
        : "rgb(0, 0, 0, 0.08)"};
    }
  `}
`;

const Column = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const displayStrings = {
  0: "Max",
  0.5: "6 months",
  1: "1 year",
  3: "3 years",
  5: "5 years",
};

const TimeButton = ({
  timespanOfData,
  lengthPercentageChange,
  selectedButton,
  length,
  setDateParameters,
}) => {
  const lengthInMS = length * 31104000000;

  const isDisabled = timespanOfData < lengthInMS;

  const onButtonClick = () => {
    if (selectedButton === length || isDisabled === true) {
      return;
    }
    if (length === 0) {
      setDateParameters({
        start: undefined,
        end: undefined,
      });
      return;
    }
    setDateParameters({
      start: new Date(new Date() - lengthInMS),
      end: new Date(),
    });
  };

  const title = displayStrings[length];

  const change = `${lengthPercentageChange}%`;

  return (
    <StyledButton
      sc={{ isSelected: selectedButton === length }}
      onClick={onButtonClick}
      variant="outlined"
      disabled={isDisabled}
    >
      {isDisabled ? (
        <span>-</span>
      ) : (
        <Column>
          {title}
          <br />
          {change}
        </Column>
      )}
    </StyledButton>
  );
};

export default TimeButton;
