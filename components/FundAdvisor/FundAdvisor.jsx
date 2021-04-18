import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Content from "./Content/Content";
import FundAdvisorChart from "./FundAdvisorChart";
import { getIsChartShowingForSmallScreens } from "../../redux/selectors";
import { fundAdvisorLabelID } from "./Content/Heading";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const Container = styled.section`
  display: flex;
  width: 100%;
  height: 100%;
`;

const FundAdvisor = () => {
  const [fundIndex, setFundIndex] = useState(0);

  const isLargeScreen = useMediaQuery((theme) => theme.breakpoints.up("lg"));

  const isChartShowingForSmallScreens = useSelector((state) =>
    getIsChartShowingForSmallScreens(state)
  );

  return (
    <Container aria-labelledby={fundAdvisorLabelID}>
      <FundAdvisorChart fundIndex={fundIndex} />

      {(isLargeScreen === true || isChartShowingForSmallScreens === false) && (
        <Content fundIndex={fundIndex} setFundIndex={setFundIndex} />
      )}
    </Container>
  );
};

export default FundAdvisor;
