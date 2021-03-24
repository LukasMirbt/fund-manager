import React from "react";
import styled from "styled-components";
import PortfolioChart from "./PortfolioChart";
import Info from "./Info/Info";
import PortfolioDataGrid from "./PortfolioDataGrid/PortfolioDataGrid";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const GridContainer = styled.div`
  position: relative;
  width: 50%;
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
