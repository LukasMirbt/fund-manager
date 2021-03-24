import React from "react";
import { useSelector } from "react-redux";
import { css } from "styled-components";
import { getData, getPortfolioData } from "../../../redux/selectors";
import DataGrid from "../../DataGrid/DataGrid";
import getColumns from "./getColumns";
import { setPortfolioFundNames } from "../../../redux/portfolio/actionCreators";
import { getPortfolioFundNames } from "../../../redux/selectors";

const sortingOrder = ["asc", "desc"];

const dataGridCSS = css`
  border-bottom: ${({ theme }) => `1px solid ${theme.palette.divider}`};
  width: 100%;
  height: 100%;
`;

const selectionModel = ["Total"];

const PortfolioDataGrid = () => {
  const { tableData } = useSelector((state) => getPortfolioData(state));
  const data = useSelector((state) => getData(state));

  const {
    fundName: totalFundName,
    acqValue: totalAcqValue,
    value: totalValue,
    oneDC: totalOneDC,
    oneYC: totalOneYC,
  } = data["Total"].tableData;

  const rows = tableData
    .map(({ fundName, oneDC, oneYC, acqValue, value, shares }) => ({
      id: fundName,
      col1: fundName,
      col2: shares,
      col3: acqValue,
      col4: value,
      col5: fundName,
      col6: oneDC,
      col7: oneYC,
    }))
    .concat({
      id: totalFundName,
      col1: totalFundName,
      col2: "-",
      col3: totalAcqValue,
      col4: totalValue,
      col5: totalFundName,
      col6: totalOneDC,
      col7: totalOneYC,
    });

  const columns = getColumns();
  return (
    <DataGrid
      rows={rows}
      columns={columns}
      containerCSS={dataGridCSS}
      tableData={tableData}
      setFundNames={setPortfolioFundNames}
      getFundNames={getPortfolioFundNames}
      sortingOrder={sortingOrder}
      selectionModel={selectionModel}
    />
  );
};

export default PortfolioDataGrid;
