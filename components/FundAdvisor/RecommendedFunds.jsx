import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import RecommendedText from "./RecommendedText";
import RecommendedIntro from "./RecommendedIntro";
import RecommendedChart from "./RecommendedChart";
import { getIsIntroShowing } from "../../redux/selectors";
import { recommendedFundsLabelID } from "./RecommendedText";

const Container = styled.section`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;
`;

const RecommendedFunds = () => {
  const isIntroShowing = useSelector((state) => getIsIntroShowing(state));

  const [fundIndex, setFundIndex] = useState(0);

  return (
    <>
      {isIntroShowing === true ? (
        <RecommendedIntro />
      ) : (
        <Container
          aria-labelledby={recommendedFundsLabelID}
          sc={{ isIntroShowing }}
          data-testid="RecommendedFunds"
        >
          <RecommendedText fundIndex={fundIndex} setFundIndex={setFundIndex} />

          <RecommendedChart />
        </Container>
      )}
    </>
  );
};

export default RecommendedFunds;
