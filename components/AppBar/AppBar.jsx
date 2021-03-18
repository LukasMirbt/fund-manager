import React from "react";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { getIsTemporaryDrawerOpen } from "../../redux/selectors";
import { setIsTemporaryDrawerOpen } from "../../redux/general/actionCreators";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { useRouter } from "next/router";

const MenuButton = styled(IconButton)`
  margin-right: 1.25rem;
`;

const DrawerAppBar = () => {
  const isTemporaryDrawerOpen = useSelector((state) =>
    getIsTemporaryDrawerOpen(state)
  );

  const dispatch = useDispatch();

  const toggleDrawer = () => {
    dispatch(setIsTemporaryDrawerOpen(!isTemporaryDrawerOpen));
  };

  const { pathname } = useRouter();

  const title =
    pathname === "/" ? "fund list" : pathname.slice(1).replace(/-+/g, " ");

  return (
    <AppBar color="primary" position="static">
      <Toolbar>
        <MenuButton
          color="inherit"
          aria-label={"Open navigation"}
          onClick={toggleDrawer}
          edge="start"
        >
          <MenuIcon />
        </MenuButton>
        <Typography variant="h6" noWrap>
          {title[0].toUpperCase() + title.slice(1)}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default DrawerAppBar;
