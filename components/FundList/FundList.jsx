import React from "react";
import styled from "styled-components";
import FundListChart from "./FundListChart";
import FundListDataGrid from "./FundListDataGrid/FundListDataGrid";

const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  overflow: hidden;
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
