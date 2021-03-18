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

const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
`;

const Portfolio = () => {
  return (
    <Container>
      <PortfolioChart />

      <Column>
        <PortfolioDataGrid />

        <Info fundName={"SEB Strategi Balanserad C SEK - Lux"} />
      </Column>
    </Container>
  );
};

export default Portfolio;
