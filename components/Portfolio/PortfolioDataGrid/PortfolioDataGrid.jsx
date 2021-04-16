import React from "react";
import { css } from "styled-components";
import DataGrid from "../../DataGrid/DataGrid";
import getColumns from "./getColumns";
import { setPortfolioFundNames } from "../../../redux/portfolio/actionCreators";
import { getPortfolioFundNames } from "../../../redux/selectors";

const sortingOrder = ["asc", "desc"];

const dataGridCSS = css`
  border-bottom: ${({ theme }) => `1px solid ${theme.palette.divider}`};

  & {
    width: 100%;
    height: 60%;
    min-height: 500px;
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

const PortfolioDataGrid = ({ portfolioTableDataByFundName }) => {
  const rows = Object.keys(portfolioTableDataByFundName).map((fundName) => {
    const {
      shares,
      acqValue,
      value,
      totalChange,
      oneDC,
      oneYC,
    } = portfolioTableDataByFundName[fundName];

    return {
      id: fundName,
      col0: fundName,
      col1: fundName,
      col2: shares,
      col3: acqValue,
      col4: value,
      col5: totalChange,
      col6: oneDC,
      col7: oneYC,
    };
  });

  const columns = getColumns({
    getFundNames: getPortfolioFundNames,
    setFundNames: setPortfolioFundNames,
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
