import React, { useRef, useEffect } from "react";
import styled, { css } from "styled-components";
import { DataGrid as MUIDataGrid, GridToolbar } from "@material-ui/data-grid";
import { useDispatch, useSelector } from "react-redux";
import onSelectionModelChange from "./onSelectionModelChange";
import onFundSelect from "../../redux/onFundSelect";
import {
  getIsChartShowing,
  getIsChartShowingForSmallScreens,
  getIsFundListShowing,
} from "../../redux/selectors";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const StyledDataGrid = styled(MUIDataGrid)`
  border: unset;
  border-left: ${({ theme }) => `1px solid ${theme.palette.divider}`};
  border-radius: 0;
  width: 100%;

  ${({ sc: { isFundListShowing }, theme }) => css`
    @media screen and (min-width: ${`${theme.breakpoints.values["lg"]}px`}) {
      width: ${isFundListShowing === true ? "50%" : "100%"};
    }
  `}

  &.MuiDataGrid-root .MuiDataGrid-toolbar {
    padding: 0.5rem;
    padding-bottom: 0;
  }

  ${({ sc: { containerCSS } }) => containerCSS};
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
  const isFundListShowing = useSelector((state) => getIsFundListShowing(state));

  const dispatch = useDispatch();

  const isCheckboxHeaderDisabledRef = useRef(false);

  const initialFundNames = useSelector(
    (state) => getFundNames(state),
    returnTrue
  );

  const isChartShowing = useSelector((state) => getIsChartShowing(state));

  const isChartShowingForSmallScreens = useSelector((state) =>
    getIsChartShowingForSmallScreens(state)
  );

  const isLargeScreen = useMediaQuery((theme) => theme.breakpoints.up("lg"));

  useEffect(() => {
    //container doesn't exist if this isn't executed at the end of the event queue
    setTimeout(() => {
      const container = document.getElementsByClassName(
        "MuiDataGrid-colCellCheckbox"
      )[0];

      container.setAttribute("aria-label", "Checkbox selection");

      const input = container.getElementsByTagName("input")[0];

      input.setAttribute("aria-label", "Unselect all rows checkbox");
    });
  }, []);

  const wasSelectionCancelledBeforeDataLoadedRef = useRef(false);

  return isFundListShowing === true &&
    (isLargeScreen === true || isChartShowingForSmallScreens === false) ? (
    <StyledDataGrid
      sc={{ isFundListShowing, isChartShowing, containerCSS }}
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
        dispatch(
          onFundSelect({
            fundName: id,
            fundNamesSelector: getFundNames,
            setFundNames,
            wasSelectionCancelledBeforeDataLoadedRef,
          })
        );
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
