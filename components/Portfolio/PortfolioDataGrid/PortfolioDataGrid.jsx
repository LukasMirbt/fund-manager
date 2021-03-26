import React from "react";
import { useSelector } from "react-redux";
import { css } from "styled-components";
import {
  getData,
  getExchangeRates,
  getPortfolio,
} from "../../../redux/selectors";
import DataGrid from "../../DataGrid/DataGrid";
import getColumns from "./getColumns";
import { setPortfolioFundNames } from "../../../redux/portfolio/actionCreators";
import { getPortfolioFundNames } from "../../../redux/selectors";
import adjustValueByCurrency from "../../DrawerTabs/PortfolioTabs/adjustValueByCurrency";

const sortingOrder = ["asc", "desc"];

const dataGridCSS = css`
  border-bottom: ${({ theme }) => `1px solid ${theme.palette.divider}`};
  width: 100%;
  height: 100%;
`;

const selectionModel = ["Total"];

const PortfolioDataGrid = () => {
  const data = useSelector((state) => getData(state));
  const portfolio = useSelector((state) => getPortfolio(state));
  const exchangeRates = useSelector((state) => getExchangeRates(state));

  const portfolioTableData = Object.keys(portfolio).map(
    (fundName) => data[fundName].tableData
  );

  const {
    fundName: totalFundName,
    acqValue: totalAcqValue,
    value: totalValue,
  } = data["Total"].tableData;

  const rows = portfolioTableData
    .map(({ fundName, oneDC, oneYC }) => {
      const { buyHistory, shares } = portfolio[fundName];
      const { yData } = data[fundName].chartData;

      const acqValue = buyHistory.reduce((acc, { acquisitionValue }) => {
        return acc + acquisitionValue;
      }, 0);

      const value = adjustValueByCurrency({
        value: shares * yData[yData.length - 1],
        fundName,
        exchangeRates,
      });

      return {
        id: fundName,
        col1: fundName,
        col2: shares,
        col3: acqValue,
        col4: value,
        col5: fundName,
        col6: oneDC,
        col7: oneYC,
      };
    })
    .concat({
      id: totalFundName,
      col1: totalFundName,
      col2: "-",
      col3: totalAcqValue,
      col4: totalValue,
      col5: totalFundName,
      col6: "-",
      col7: "-",
    });

  const columns = getColumns();
  return (
    <DataGrid
      rows={rows}
      columns={columns}
      containerCSS={dataGridCSS}
      tableData={portfolioTableData}
      setFundNames={setPortfolioFundNames}
      getFundNames={getPortfolioFundNames}
      sortingOrder={sortingOrder}
      selectionModel={selectionModel}
    />
  );
};

export default PortfolioDataGrid;
