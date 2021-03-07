import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Spinner from "./Spinner";
import { getIsChartDataLoading } from "../../../redux/selectors";

const Container = styled.div`
  display: ${({ sc: { isChartDataLoading } }) =>
    isChartDataLoading ? "block" : "none"};
  position: absolute;
  right: -4rem;
`;

const ChartSpinner = () => {
  const isChartDataLoading = useSelector((state) =>
    getIsChartDataLoading(state)
  );
  return (
    <Container sc={{ isChartDataLoading }}>
      <Spinner />
    </Container>
  );
};

export default ChartSpinner;
