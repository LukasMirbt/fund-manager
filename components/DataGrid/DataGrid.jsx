import React, { useRef } from "react";
import { DataGrid as MUIDataGrid, GridToolbar } from "@material-ui/data-grid";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import onSelectionModelChange from "./onSelectionModelChange";
import onFundSelect from "../../redux/onFundSelect";
import { getIsFundListShowing } from "../../redux/selectors";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;

  ${({ sc: { containerCSS } }) => containerCSS};
`;

const StyledDataGrid = styled(MUIDataGrid)`
  border: unset;
  border-left: ${({ theme }) => `1px solid ${theme.palette.divider}`};
  border-radius: 0;

  /*   .MuiDataGrid-colCellTitle {
    text-overflow: unset;
    line-height: normal;
    white-space: normal;
    display: flex;
    align-items: center;
    height: 56px;
  }
 */
  .MuiDataGrid-menuIcon {
    display: none;
  }
`;

const rowsPerPageOptions = [];

const components = {
  Toolbar: GridToolbar,
};

const DataGrid = ({
  rows,
  columns,
  tableData,
  setFundNames,
  getFundNames,
  containerCSS,
  onSortModelChange,
  sortingOrder,
  selectionModel = [tableData[0].fundName],
}) => {
  const dispatch = useDispatch();

  const isCheckboxHeaderDisabledRef = useRef(false);

  const isFundListShowing = useSelector((state) => getIsFundListShowing(state));

  return isFundListShowing === true ? (
    <Container sc={{ isCheckboxHeaderDisabled: true, containerCSS }}>
      <StyledDataGrid
        checkboxSelection
        onSortModelChange={onSortModelChange}
        selectionModel={selectionModel}
        onSelectionModelChange={({ selectionModel }) =>
          onSelectionModelChange(
            selectionModel,
            isCheckboxHeaderDisabledRef,
            dispatch,
            setFundNames
          )
        }
        onRowSelected={({ data: { id } }) => {
          dispatch(onFundSelect(id, getFundNames, setFundNames));
        }}
        components={components}
        sortingOrder={sortingOrder}
        rowsPerPageOptions={rowsPerPageOptions}
        rows={rows}
        columns={columns}
      />
    </Container>
  ) : null;
};

export default DataGrid;
