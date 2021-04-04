import React from "react";
import styled, { css } from "styled-components";
import PortfolioChart from "./PortfolioChart";
import Info from "./Info/Info";
import PortfolioDataGrid from "./PortfolioDataGrid/PortfolioDataGrid";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;

  flex-direction: column;

  ${({ theme }) => css`
    @media screen and (min-width: ${`${theme.breakpoints.values["lg"]}px`}) {
      flex-direction: row;
    }
  `}
`;

const GridContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;

  ${({ theme }) => css`
    @media screen and (min-width: ${`${theme.breakpoints.values["lg"]}px`}) {
      width: 50%;
    }
  `}
`;

const Portfolio = () => {
  return (
    <Container>
      <PortfolioChart />

      <GridContainer>
        <PortfolioDataGrid />

        <Info />
      </GridContainer>
    </Container>
  );
};

export default Portfolio;
