import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Content from "./Content/Content";
import Intro from "./Intro";
import FundAdvisorChart from "./FundAdvisorChart";
import { getIsIntroShowing } from "../../redux/selectors";
import { recommendedFundsLabelID } from "./Content/Heading";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const Container = styled.section`
  display: flex;
  width: 100%;
  height: 100%;
`;

const RecommendedFunds = () => {
  const isIntroShowing = useSelector((state) => getIsIntroShowing(state));

  const [fundIndex, setFundIndex] = useState(0);

  const isLargeScreen = useMediaQuery((theme) => theme.breakpoints.up("lg"));

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
          {isLargeScreen === true && <FundAdvisorChart fundIndex={fundIndex} />}
          <Content fundIndex={fundIndex} setFundIndex={setFundIndex} />
        </Container>
      )}
    </>
  );
};

export default RecommendedFunds;
