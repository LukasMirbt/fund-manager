import React from "react";
import styled from "styled-components";
import FundListChart from "./FundListChart";
import FundListDataGrid from "./FundListDataGrid/FundListDataGrid";

const Container = styled.section`
  width: 100%;
  height: 100%;

  display: flex;
  overflow: hidden;

  /* position: relative; */
`;

const FundList = () => {
  return (
    <Container>
      <FundListChart />

      <FundListDataGrid />
    </Container>
  );
};

export default FundList;
