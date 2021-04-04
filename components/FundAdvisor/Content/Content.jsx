import React from "react";
import styled, { css } from "styled-components";
import { useSelector } from "react-redux";
import {
  getIsChartShowing,
  getRecommendedFunds,
} from "../../../redux/selectors";
import Stepper from "../Stepper";
import AdditionalInfo from "./AdditionalInfo";
import Heading from "./Heading";
import Description from "./Description";
import Forecast from "./Forecast";
import History from "./History";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  height: 100%;

  ${({ theme }) => css`
    @media screen and (min-width: ${`${theme.breakpoints.values["lg"]}px`}) {
      width: 50%;
      border-right: ${({ theme }) => `1px solid ${theme.palette.divider}`};
    }
  `}
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  padding-bottom: 0;
  overflow: auto;
`;

const Content = ({ fundIndex, setFundIndex }) => {
  const recommendedFunds = useSelector((state) => getRecommendedFunds(state));

  const isChartShowing = useSelector((state) => getIsChartShowing(state));

  return (
    <Container sc={{ isChartShowing }}>
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

export default Content;
