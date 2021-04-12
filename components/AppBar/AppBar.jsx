import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { getIsTemporaryDrawerOpen } from "../../redux/selectors";
import { setIsTemporaryDrawerOpen } from "../../redux/general/actionCreators";
import MUIAppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import AccountButton from "./AccountButton/AccountButton";
import ToggleChartButton from "./ToggleChartButton";
import AppBarTitle from "./AppBarTitle";

const MenuButton = styled(IconButton)`
  margin-right: 1.25rem;

  &:hover {
    background-color: rgba(255, 255, 255, 0.08);
  }
`;

const StyledToolbar = styled(Toolbar)`
  justify-content: space-between;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
`;

const StyledAppBar = styled(MUIAppBar)`
  position: relative;
`;

const AppBar = () => {
  const isTemporaryDrawerOpen = useSelector((state) =>
    getIsTemporaryDrawerOpen(state)
  );

  const dispatch = useDispatch();

  return (
    <StyledAppBar color="primary" position="static">
      <StyledToolbar>
        <Row>
          <MenuButton
            data-cy="menuButton"
            color="inherit"
            aria-label="Open navigation"
            onClick={() => {
              dispatch(setIsTemporaryDrawerOpen(!isTemporaryDrawerOpen));
            }}
            edge="start"
          >
            <MenuIcon />
          </MenuButton>

          <AppBarTitle />
        </Row>

        <Row>
          <ToggleChartButton />

          <AccountButton />
        </Row>
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default AppBar;
