import React, { useRef } from "react";
import { DataGrid as MUIDataGrid, GridToolbar } from "@material-ui/data-grid";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import onSelectionModelChange from "./onSelectionModelChange";
import onFundSelect from "../../redux/onFundSelect";
import { getIsFundListShowing } from "../../redux/selectors";

/* const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;

  ${({ sc: { containerCSS } }) => containerCSS};
`; */

const StyledDataGrid = styled(MUIDataGrid)`
  border: unset;
  border-left: ${({ theme }) => `1px solid ${theme.palette.divider}`};
  border-radius: 0;

  ${({ sc: { containerCSS } }) => containerCSS};

  &.MuiDataGrid-root .MuiDataGrid-toolbar {
    padding: 0.5rem;
    padding-bottom: 0;
  }

  /*   .MuiDataGrid-window {
    width: 100%;
    height: calc(100% - 52px);
    left: unset;
    right: unset;
  }
 */
  /*   .MuiDataGrid-colCellTitle {
    text-overflow: unset;
    line-height: normal;
    white-space: normal;
    display: flex;
    align-items: center;
    height: 56px;
  }
 */
`;

const rowsPerPageOptions = [];

const components = {
  Toolbar: GridToolbar,
};

const returnTrue = () => true;

const DataGrid = ({
  rows,
  columns,
  setFundNames,
  getFundNames,
  containerCSS,
  onSortModelChange,
  sortingOrder,
}) => {
  const dispatch = useDispatch();

  const isCheckboxHeaderDisabledRef = useRef(false);

  const initialFundNames = useSelector(
    (state) => getFundNames(state),
    returnTrue
  );

  const isFundListShowing = useSelector((state) => getIsFundListShowing(state));

  return isFundListShowing === true ? (
    <StyledDataGrid
      sc={{ containerCSS }}
      disableColumnMenu
      checkboxSelection
      onSortModelChange={onSortModelChange}
      selectionModel={initialFundNames}
      onSelectionModelChange={({ selectionModel }) =>
        onSelectionModelChange({
          selectionModel,
          isCheckboxHeaderDisabledRef,
          dispatch,
          setFundNames,
        })
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
  ) : null;
};

export default DataGrid;
