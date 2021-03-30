import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import RecommendedText from "./Content/Content";
import Intro from "./Intro";
import RecommendedChart from "./Chart";
import { getIsIntroShowing } from "../../redux/selectors";
import { recommendedFundsLabelID } from "./Content/Heading";

const Container = styled.section`
  display: flex;
  width: 100%;
  height: 100%;
`;

const RecommendedFunds = () => {
  const isIntroShowing = useSelector((state) => getIsIntroShowing(state));

  const [fundIndex, setFundIndex] = useState(0);

  return (
    <>
      {isIntroShowing === true ? (
        <Intro />
      ) : (
        <Container
          aria-labelledby={recommendedFundsLabelID}
          sc={{ isIntroShowing }}
          data-testid="RecommendedFunds"
        >
          <RecommendedChart fundIndex={fundIndex} />
          <RecommendedText fundIndex={fundIndex} setFundIndex={setFundIndex} />
        </Container>
      )}
    </>
  );
};

export default RecommendedFunds;
