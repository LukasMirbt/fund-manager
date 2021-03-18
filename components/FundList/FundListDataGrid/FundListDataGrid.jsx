import React, { useRef } from "react";
import { css } from "styled-components";
import { useSelector } from "react-redux";
import { getFundNames, getTableData } from "../../../redux/selectors";
import DataGrid from "../../DataGrid/DataGrid";
import { setFundNames } from "../../../redux/fundList/actionCreators";
import getColumns from "./getColumns";

const sortingOrder = ["asc", "desc"];

const dataGridCSS = css`
  width: 50%;
`;

const FundListDataGrid = () => {
  const tableData = useSelector((state) => getTableData(state));

  const morningstarRatingSortOrderRef = useRef(sortingOrder[0]);

  const onSortModelChange = ({ sortModel: [{ field, sort }] }) => {
    if (field === "col2") {
      morningstarRatingSortOrderRef.current = sort;
    }
  };

  const rows = tableData.map(
    ({
      fundName,
      morningstarRating,
      oneDC,
      oneYC,
      threeYC,
      fiveYC,
      mostRecentDate,
    }) => ({
      id: fundName,
      col1: fundName,
      col2: morningstarRating,
      col3: oneDC,
      col4: oneYC,
      col5: threeYC,
      col6: fiveYC,
      col7: mostRecentDate,
    })
  );

  const columns = getColumns(morningstarRatingSortOrderRef);

  return (
    <DataGrid
      rows={rows}
      columns={columns}
      containerCSS={dataGridCSS}
      tableData={tableData}
      setFundNames={setFundNames}
      getFundNames={getFundNames}
      sortingOrder={sortingOrder}
      onSortModelChange={onSortModelChange}
    />
  );
};

export default FundListDataGrid;
