import React, { useRef } from "react";
import { DataGrid as MUIDataGrid, GridToolbar } from "@material-ui/data-grid";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { getTableData, getData } from "../../../redux/selectors";
import sortPercentStrings from "../../common/sorting/sortPercentStrings";
import sortStrings from "../../common/sorting/sortStrings";
import sortMorningstarRatings from "../../common/sorting/sortMorningstarRatings";
import StarGroup from "./StarGroup";
import { fundClick } from "../../../redux/general/actionCreators";

const Container = styled.div`
  width: 50%;
  height: 100%;
`;

const StyledDataGrid = styled(MUIDataGrid)`
  border: unset;
  border-left: ${({ theme }) => `1px solid ${theme.palette.divider}`};
  border-radius: 0;

  .MuiDataGrid-colCellTitle {
    /*     text-overflow: unset;
    line-height: normal;
    white-space: normal;
    display: flex;
    align-items: center;
    height: 56px; */
  }
`;

const FundnameCell = styled.div`
  line-height: normal;
  white-space: normal;
`;

const ChangeCell = styled.div`
  color: ${({ sc: { value } }) => {
    if (value.slice(0, -2) === "0.00") {
      return "blue";
    } else {
      return value[0] === "-" ? "red" : "green";
    }
  }};
`;

const sortingOrder = ["asc", "desc"];

const rowsPerPageOptions = [];

const renderFundnameCell = ({ value }) => <FundnameCell>{value}</FundnameCell>;

const renderChangeCell = ({ value }) => (
  <ChangeCell sc={{ value }}>{value}</ChangeCell>
);

const renderMorningstarRatingCell = ({ value }) =>
  value === "-" ? <>{"-"}</> : <StarGroup numberOfStars={Number(value)} />;

const components = {
  Toolbar: GridToolbar,
};

const DataGrid = () => {
  const tableData = useSelector((state) => getTableData(state));

  const stateData = useSelector((state) => getData(state));

  const col2SortOrderRef = useRef(sortingOrder[0]);

  const dispatch = useDispatch();

  const rows = tableData.map(
    ({ fundName, morningstarRating, oneDC, oneYC, threeYC, fiveYC }) => ({
      id: fundName,
      col1: fundName,
      col2: morningstarRating,
      col3: oneDC,
      col4: oneYC,
      col5: threeYC,
      col6: fiveYC,
    })
  );

  const columns = [
    {
      field: "col1",
      headerName: "Fundname",
      width: 220,
      sortComparator: sortStrings,
      renderCell: renderFundnameCell,
    },
    {
      field: "col2",
      headerName: "Morningstar rating",
      width: 150,
      sortComparator: (a, b) => sortMorningstarRatings(a, b, col2SortOrderRef),
      renderCell: renderMorningstarRatingCell,
    },
    {
      field: "col3",
      headerName: "1-day change",
      width: 130,
      sortComparator: sortPercentStrings,
      renderCell: renderChangeCell,
    },
    {
      field: "col4",
      headerName: "1-year change",
      width: 130,
      sortComparator: sortPercentStrings,
      renderCell: renderChangeCell,
    },
    {
      field: "col5",
      headerName: "3-year change",
      width: 130,
      sortComparator: sortPercentStrings,
      renderCell: renderChangeCell,
    },
    {
      field: "col6",
      headerName: "5-year change",
      width: 130,
      sortComparator: sortPercentStrings,
      renderCell: renderChangeCell,
    },
  ];

  return (
    <Container>
      <StyledDataGrid
        checkboxSelection
        onSortModelChange={({ sortModel: [{ field, sort }] }) => {
          if (field === "col2") {
            col2SortOrderRef.current = sort;
          }
        }}
        selectionModel={[tableData[0].fundName]}
        onRowSelected={({ data: { id } }) => {
          dispatch(fundClick(id));
        }}
        components={components}
        sortingOrder={sortingOrder}
        rowsPerPageOptions={rowsPerPageOptions}
        rows={rows}
        columns={columns}
      />
    </Container>
  );
};

export default DataGrid;
