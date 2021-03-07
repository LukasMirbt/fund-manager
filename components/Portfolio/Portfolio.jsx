import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Info from "./Info";
import getTotalPortfolioValuesAndTableData from "./getTotalPortfolioValuesAndTableData/getTotalPortfolioValuesAndTableData";
import {
  getData,
  getPortfolio,
  getExchangeRates,
  getPortfolioFundName,
  getIsTableHidden,
} from "../../redux/selectors";
import PortfolioChart from "./PortfolioChart";
import EmptyPortfolio from "./EmptyPortfolio";

const Container = styled.div`
  min-width: 550px;
  min-height: 550px;
  width: calc(100% - 3rem);
  height: calc(100% - 3rem);
  margin: 1.5rem;
  border: 1px solid rgb(0, 0, 0, 0.12);
  box-sizing: border-box;
  /* position: relative; */

  .gridItem {
    &:nth-child(1) {
      height: 100%;
      width: 100%;
      display: ${({ sc: { isTableHidden } }) =>
        isTableHidden === true ? "block" : "none"};
    }
    &:nth-child(2) {
      display: ${({ sc: { isTableHidden } }) =>
        isTableHidden === true ? "none" : "block"};
    }
    &:nth-child(3) {
      display: ${({ sc: { isTableHidden } }) =>
        isTableHidden === true ? "none" : "block"};
    }
    @media (min-width: 1600px) {
      &:nth-child(1) {
        width: 100%;
        height: 100%;
        display: block;
      }
      &:nth-child(2) {
        box-shadow: -1px 0px 0px 0px rgba(0, 0, 0, 0.2);
        display: block;
        display: ${({ sc: { isTableHidden } }) =>
          isTableHidden === true ? "none" : "block"};
      }
      &:nth-child(3) {
        box-shadow: -1px 0px 0px 0px rgba(0, 0, 0, 0.2);
        display: ${({ sc: { isTableHidden } }) =>
          isTableHidden === true ? "none" : "block"};
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.values["sm"]}px) {
    margin: 0;
    width: 100%;
    height: 100%;
  }

  @media (min-width: 1600px) {
    display: grid;
    grid-template-areas:
      "PortfolioChart PortfolioTable"
      "PortfolioChart Info";
    grid-template-columns: ${({ sc: { isTableHidden } }) =>
      isTableHidden === true ? "100%" : "50% 50%"};
    grid-template-rows: min-content 1fr;
  }
`;

const Portfolio = () => {
  const data = useSelector((state) => getData(state));
  const portfolio = useSelector((state) => getPortfolio(state));
  const exchangeRates = useSelector((state) => getExchangeRates(state));
  const portfolioFundName = useSelector((state) => getPortfolioFundName(state));

  const portfolioData = useMemo(() => {
    return getTotalPortfolioValuesAndTableData(portfolio, exchangeRates, data);
  }, [data, portfolio, exchangeRates]);

  const {
    totalXData,
    totalYData,
    tableData,
    totalChanges,
    currentTotalValue,
    acquisitionTotalValue,
  } = portfolioData;

  const isTableHidden = useSelector((state) => getIsTableHidden(state));

  return portfolioFundName === "" ? (
    <EmptyPortfolio />
  ) : (
    <Container sc={{ isTableHidden }}>
      <PortfolioChart
        className="gridItem"
        mainFundName={portfolioFundName}
        totalXData={totalXData}
        totalYData={totalYData}
      />

      {isTableHidden === false && (
        <>
          {/*           <PortfolioTable
            className="gridItem"
            activatedRow={portfolioFundName}
            tableData={tableData}
            acquisitionValue={acquisitionTotalValue}
            currentValue={currentTotalValue}
            changes={totalChanges}
          /> */}

          {portfolioFundName !== "Total" && (
            <Info className="gridItem" fundName={portfolioFundName} />
          )}
        </>
      )}
    </Container>
  );
};

export default Portfolio;
