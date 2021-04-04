import React from "react";
import styled, { css } from "styled-components";
import FundListChart from "./FundListChart";
import FundListDataGrid from "./FundListDataGrid/FundListDataGrid";

const Container = styled.section`
  width: 100%;
  height: 100%;

  display: flex;
  overflow: hidden;

  /* position: relative; */

  /*   ${({ theme }) => css`
    @media screen and (min-width: ${`${theme.breakpoints.values["xl"]}px`}) {
      border-right: ${`1px solid ${theme.palette.divider}`};
    }
  `} */
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
