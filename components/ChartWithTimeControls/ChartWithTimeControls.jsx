import React from "react";
import styled, { css } from "styled-components";
import TimeControls from "./TimeControls/TimeControls";
import Chart from "./Chart/Chart";
import { useSelector } from "react-redux";
import {
  getIsChartShowing,
  getIsChartShowingForSmallScreens,
  getIsFundListShowing,
} from "../../redux/selectors";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const Container = styled.section`
  ${({ sc: { isFundListShowing }, theme }) => css`
    @media screen and (min-width: ${`${theme.breakpoints.values["lg"]}px`}) {
      width: ${isFundListShowing === true ? "50%" : "100%"};
    }
  `}

  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  ${({ sc: { containerCSS } }) => containerCSS};
`;

const ChartWithTimeControls = ({ fundNames, containerCSS }) => {
  const isChartShowing = useSelector((state) => getIsChartShowing(state));

  const isChartShowingForSmallScreens = useSelector((state) =>
    getIsChartShowingForSmallScreens(state)
  );

  const isFundListShowing = useSelector((state) => getIsFundListShowing(state));

  const isLargeScreen = useMediaQuery((theme) => theme.breakpoints.up("lg"));

  return isChartShowing === true &&
    (isLargeScreen === true || isChartShowingForSmallScreens === true) ? (
    <Container
      aria-label="Chart"
      sc={{ containerCSS, isChartShowing, isFundListShowing }}
    >
      <Chart fundNames={fundNames} />

      <TimeControls />
    </Container>
  ) : null;
};

export default ChartWithTimeControls;
