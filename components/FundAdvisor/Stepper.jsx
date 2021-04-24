import React from "react";
import styled from "styled-components";
import MobileStepper from "@material-ui/core/MobileStepper";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";

const StyledStepper = styled(MobileStepper)`
  border-top: ${({ theme }) => `1px solid ${theme.palette.divider}`};
  width: 100%;
  position: sticky;
  bottom: 0;
`;

const Stepper = ({ fundIndex, setFundIndex, recommendedFunds }) => {
  const maxSteps = recommendedFunds.length;

  const handleNext = () => {
    setFundIndex((prevIndex) => prevIndex + 1);
  };

  const handleBack = () => {
    setFundIndex((prevIndex) => prevIndex - 1);
  };

  return (
    <StyledStepper
      steps={maxSteps}
      position="static"
      variant="text"
      activeStep={fundIndex}
      nextButton={
        <Button
          data-testid="nextButton"
          variant="contained"
          color="primary"
          size="medium"
          onClick={handleNext}
          disabled={fundIndex === maxSteps - 1}
        >
          Next
          <KeyboardArrowRight />
        </Button>
      }
      backButton={
        <Button
          data-testid="backButton"
          size="medium"
          onClick={handleBack}
          disabled={fundIndex === 0}
        >
          <KeyboardArrowLeft />
          Back
        </Button>
      }
    />
  );
};

export default Stepper;
