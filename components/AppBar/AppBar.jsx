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
import AccountButton from "./AccountButton/AccountButton";
import ToggleChartButton from "./ToggleChartButton";

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

const StyledAppBar = styled(AppBar)`
  position: relative;
`;

const DrawerAppBar = () => {
  const isTemporaryDrawerOpen = useSelector((state) =>
    getIsTemporaryDrawerOpen(state)
  );

  const dispatch = useDispatch();

  const { pathname } = useRouter();

  const title =
    pathname === "/" ? "fund list" : pathname.slice(1).replace(/-+/g, " ");

  return (
    <StyledAppBar color="primary" position="static">
      <StyledToolbar>
        <Row>
          <MenuButton
            color="inherit"
            aria-label="Open navigation"
            onClick={() => {
              dispatch(setIsTemporaryDrawerOpen(!isTemporaryDrawerOpen));
            }}
            edge="start"
          >
            <MenuIcon />
          </MenuButton>
          <Typography variant="h6" component="h1" noWrap>
            {title[0].toUpperCase() + title.slice(1)}
          </Typography>
        </Row>

        <Row>
          <ToggleChartButton />

          <AccountButton />
        </Row>
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default DrawerAppBar;
