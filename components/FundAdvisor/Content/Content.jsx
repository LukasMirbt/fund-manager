import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { getRecommendedFunds } from "../../../redux/selectors";
import Stepper from "../Stepper";
import AdditionalInfo from "./AdditionalInfo";
import Heading from "./Heading";
import Description from "./Description";
import Forecast from "./Forecast";
import History from "./History";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: space-between;
  max-height: 100%;
  overflow: auto;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1.5rem;
`;

const RecommendedText = ({ fundIndex, setFundIndex }) => {
  const recommendedFunds = useSelector((state) => getRecommendedFunds(state));

  return (
    <Container>
      <Column>
        <Heading fundIndex={fundIndex} />

        <Description />

        <Forecast />
        <History fundIndex={fundIndex} />

        <AdditionalInfo fundIndex={fundIndex} />
      </Column>

      <Stepper
        fundIndex={fundIndex}
        setFundIndex={setFundIndex}
        recommendedFunds={recommendedFunds}
      />
    </Container>
  );
};

export default RecommendedText;
