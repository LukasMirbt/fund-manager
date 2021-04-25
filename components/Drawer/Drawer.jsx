import React from "react";
import styled from "styled-components";
import MUITemporaryDrawer from "@material-ui/core/Drawer";
import { useDispatch, useSelector } from "react-redux";
import { getIsTemporaryDrawerOpen } from "../../redux/selectors";
import { setIsTemporaryDrawerOpen } from "../../redux/general/actionCreators";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import DrawerTabs from "./DrawerTabs/DrawerTabs";

const StyledDrawer = styled.nav`
  flex-direction: column;
  overflow-y: auto;
  flex-shrink: 0;
  width: ${({ theme }) => `${theme.drawerWidth}px`};
`;

const Drawer = () => {
  const dispatch = useDispatch();

  const isTemporaryDrawerOpen = useSelector((state) =>
    getIsTemporaryDrawerOpen(state)
  );

  return (
    <MUITemporaryDrawer
      anchor="left"
      open={isTemporaryDrawerOpen}
      onClose={() => {
        dispatch(setIsTemporaryDrawerOpen(false));
      }}
    >
      <StyledDrawer>
        <Toolbar>
          <IconButton
            data-testid="openedMenuButton"
            color="inherit"
            aria-label={"Close navigation"}
            onClick={() => {
              dispatch(setIsTemporaryDrawerOpen(!isTemporaryDrawerOpen));
            }}
            edge="start"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>

        <DrawerTabs />
      </StyledDrawer>
    </MUITemporaryDrawer>
  );
};

export default Drawer;
