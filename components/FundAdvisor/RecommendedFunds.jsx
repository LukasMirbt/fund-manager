import React from "react";
import { useSelector } from "react-redux";
import styled, { css } from "styled-components";
import RecommendedText from "./RecommendedText";
import RecommendedIntro from "./RecommendedIntro";
import RecommendedChart from "./RecommendedChart";
import { getIsRecommendedIntroShowing } from "../../redux/selectors";
import { recommendedFundsLabelID } from "./RecommendedText";

const Container = styled.section`
  display: flex;
  flex-grow: 1;
  flex-direction: column;

  //overflow: hidden is neccessary for chart to resize properly when the drawer is toggled
  overflow: hidden;
`;

const RecommendedFunds = () => {
  const isRecommendedIntroShowing = useSelector((state) =>
    getIsRecommendedIntroShowing(state)
  );

  return (
    <>
      {isRecommendedIntroShowing === true ? (
        <RecommendedIntro />
      ) : (
        <Container
          aria-labelledby={recommendedFundsLabelID}
          sc={{ isRecommendedIntroShowing }}
          data-testid="RecommendedFunds"
        >
          <RecommendedText />

          <RecommendedChart />
        </Container>
      )}
    </>
  );
};

export default RecommendedFunds;
