import React from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import AccountMenuButton from "./AccountMenuButton";
import {
  getIsTemporaryDrawerOpen,
  getIsDrawerOpen,
} from "../../redux/selectors";
import {
  setIsTemporaryDrawerOpen,
  setIsDrawerOpen,
} from "../../redux/general/actionCreators";
import ToggleChartAndTableButton from "./ToggleChartAndTableButton";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

const MenuButton = styled(IconButton)`
  margin-right: 1.25rem;
  background-color: ${({ theme: { primaryColor } }) => primaryColor};
  :hover {
    background-color: ${({ theme: { primaryColorHover } }) =>
      primaryColorHover};
  }
`;

const DrawerAppBar = () => {
  const isTemporaryDrawerOpen = useSelector((state) =>
    getIsTemporaryDrawerOpen(state)
  );

  const isDrawerOpen = useSelector((state) => getIsDrawerOpen(state));

  const dispatch = useDispatch();

  const isLargeScreen = useMediaQuery((theme) => theme.breakpoints.up("md"));

  const toggleDrawer = () => {
    /*     if (isLargeScreen === true) {
      dispatch(setIsDrawerOpen(!isDrawerOpen));
      return;
    } */
    dispatch(setIsTemporaryDrawerOpen(!isTemporaryDrawerOpen));
  };

  return (
    <AppBar color="primary" position="static">
      <Toolbar>
        <MenuButton
          color="inherit"
          aria-label={"Toggle navigation"}
          aria-haspopup={isLargeScreen === true ? undefined : "dialog"}
          onClick={toggleDrawer}
          edge="start"
        >
          <MenuIcon />
        </MenuButton>
        <Typography variant="h6" noWrap>
          Fund overview
        </Typography>
        <ToggleChartAndTableButton />
        {/*    <AccountMenuButton /> */}
      </Toolbar>
    </AppBar>
  );
};

export default DrawerAppBar;
