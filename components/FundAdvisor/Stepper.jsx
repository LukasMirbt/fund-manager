import React from "react";
import styled from "styled-components";
import MobileStepper from "@material-ui/core/MobileStepper";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";

const StyledStepper = styled(MobileStepper)`
  background-color: rgba(0, 0, 0, 0.09);
  width: 100%;
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
          size="medium"
          onClick={handleNext}
          disabled={fundIndex === maxSteps - 1}
        >
          Next
          <KeyboardArrowRight />
        </Button>
      }
      backButton={
        <Button size="medium" onClick={handleBack} disabled={fundIndex === 0}>
          <KeyboardArrowLeft />
          Back
        </Button>
      }
    />
  );
};

export default Stepper;
