import React from "react";
import { useSelector } from "react-redux";
import { css } from "styled-components";
import {
  getData,
  getExchangeRates,
  getPortfolio,
} from "../../../redux/selectors";
import DataGrid from "../../DataGrid/DataGrid";
import columns from "./columns";
import { setPortfolioFundNames } from "../../../redux/portfolio/actionCreators";
import { getPortfolioFundNames } from "../../../redux/selectors";
import adjustValueByCurrency from "../../DrawerTabs/PortfolioTabs/adjustValueByCurrency";
import getFundAcquisitionValue from "../getFundAquisitionValue";

const sortingOrder = ["asc", "desc"];

const dataGridCSS = css`
  border-bottom: ${({ theme }) => `1px solid ${theme.palette.divider}`};

  & {
    width: 100%;
    height: 66%;
  }

  .MuiDataGrid-colCellTitle {
    text-overflow: unset;
    line-height: normal;
    white-space: normal;
    display: flex;
    align-items: center;
    height: 56px;
  }

  .MuiDataGrid-colCellNumeric {
    text-align: right;
  }
`;

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

  const totalChange = `${((totalValue / totalAcqValue) * 100 - 100).toFixed(
    2
  )} %`;

  const rows = portfolioTableData
    .map(({ fundName, oneDC, oneYC }) => {
      const { shares } = portfolio[fundName];
      const { yData } = data[fundName].chartData;

      const fundAcqValue = getFundAcquisitionValue(portfolio[fundName]).toFixed(
        2
      );

      const value = adjustValueByCurrency({
        value: shares * yData[yData.length - 1],
        fundName,
        exchangeRates,
      }).toFixed(2);

      const totalFundChange = `${((value / fundAcqValue) * 100 - 100).toFixed(
        2
      )} %`;

      return {
        id: fundName,
        col1: fundName,
        col2: shares,
        col3: fundAcqValue,
        col4: value,
        col5: totalFundChange,
        col6: oneDC,
        col7: oneYC,
      };
    })
    .concat({
      id: totalFundName,
      col1: totalFundName,
      col2: "-",
      col3: totalAcqValue.toFixed(2),
      col4: totalValue.toFixed(2),
      col5: totalChange,
      col6: "-",
      col7: "-",
    });

  return (
    <DataGrid
      rows={rows}
      columns={columns}
      containerCSS={dataGridCSS}
      setFundNames={setPortfolioFundNames}
      getFundNames={getPortfolioFundNames}
      sortingOrder={sortingOrder}
    />
  );
};

export default PortfolioDataGrid;
