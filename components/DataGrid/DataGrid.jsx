import React from "react";
import styled, { css } from "styled-components";
import { DataGrid as MUIDataGrid, GridToolbar } from "@material-ui/data-grid";
import { useDispatch, useSelector } from "react-redux";
import onFundSelect from "../../redux/onFundSelect";
import {
  getIsChartShowing,
  getIsChartShowingForSmallScreens,
  getIsFundListShowing,
} from "../../redux/selectors";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import useFixToolbarAccessibility from "./useFixToolbarAccessibility";

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

  & .MuiDataGrid-cell {
    &:first-child {
      padding: 0;
      justify-content: center;
    }
  }

  & .MuiDataGrid-colCell {
    &:first-child {
      padding: 0;

      & .MuiDataGrid-colCellTitleContainer {
        justify-content: center;
      }
    }
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
  onSortModelChange,
  sortingOrder,
  containerCSS,
}) => {
  const isFundListShowing = useSelector((state) => getIsFundListShowing(state));

  const dispatch = useDispatch();

  const initialFundNames = useSelector(
    (state) => getFundNames(state),
    returnTrue
  );

  const isChartShowing = useSelector((state) => getIsChartShowing(state));

  const isChartShowingForSmallScreens = useSelector((state) =>
    getIsChartShowingForSmallScreens(state)
  );

  const isLargeScreen = useMediaQuery((theme) => theme.breakpoints.up("lg"));

  useFixToolbarAccessibility();

  return isFundListShowing === true &&
    (isLargeScreen === true || isChartShowingForSmallScreens === false) ? (
    <StyledDataGrid
      sc={{ isFundListShowing, isChartShowing, containerCSS }}
      disableColumnMenu
      onSortModelChange={onSortModelChange}
      selectionModel={initialFundNames}
      onRowSelected={({ data: { id } }) => {
        dispatch(
          onFundSelect({
            fundName: id,
            getFundNames,
            setFundNames,
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
