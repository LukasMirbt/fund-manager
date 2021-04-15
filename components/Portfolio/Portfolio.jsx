import React from "react";
import styled, { css } from "styled-components";
import PortfolioChart from "./PortfolioChart";
import Info from "./Info/Info";
import PortfolioDataGrid from "./PortfolioDataGrid/PortfolioDataGrid";
import { useSelector } from "react-redux";
import {
  getData,
  getExchangeRates,
  getIsChartShowing,
  getPortfolio,
} from "../../redux/selectors";
import getPortfolioTableDataByFundName from "./getPortfolioTableDataByFundName";
import EmptyPortfolio from "./EmptyPortfolio";
import BuyFundFab from "./BuyFundFab";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  overflow-x: hidden;

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
  overflow-y: auto;
  overflow-x: hidden;

  ${({ theme, sc: { isChartShowing } }) => css`
    @media screen and (min-width: ${`${theme.breakpoints.values["lg"]}px`}) {
      width: ${isChartShowing === true ? "50%" : "100%"};
    }
  `}
`;

const Portfolio = () => {
  const data = useSelector((state) => getData(state));
  const portfolio = useSelector((state) => getPortfolio(state));
  const exchangeRates = useSelector((state) => getExchangeRates(state));

  const isPortfolioEmpty = Object.keys(portfolio).length === 0;

  let portfolioTableDataByFundName;

  if (isPortfolioEmpty === false) {
    portfolioTableDataByFundName = getPortfolioTableDataByFundName({
      data,
      portfolio,
      exchangeRates,
    });
  }

  const isChartShowing = useSelector((state) => getIsChartShowing(state));

  return (
    <Container>
      <PortfolioChart />
      {isPortfolioEmpty === true ? (
        <EmptyPortfolio />
      ) : (
        <GridContainer sc={{ isChartShowing }}>
          <PortfolioDataGrid
            portfolioTableDataByFundName={portfolioTableDataByFundName}
          />

          <Info portfolioTableDataByFundName={portfolioTableDataByFundName} />

          <BuyFundFab />
        </GridContainer>
      )}
    </Container>
  );
};

export default Portfolio;
