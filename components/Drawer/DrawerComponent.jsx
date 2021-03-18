import Tabs from "../DrawerTabs/Tabs";
import styled, { css } from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import {
  getIsDrawerOpen,
  getIsTemporaryDrawerOpen,
} from "../../redux/selectors";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import Divider from "@material-ui/core/Divider";
import { setIsTemporaryDrawerOpen } from "../../redux/general/actionCreators";

const StyledDrawer = styled.nav`
  flex-direction: column;
  overflow-y: auto;
  flex-shrink: 0;

  ${({ sc: { isDrawerOpen }, theme: { drawerWidth, palette } }) => css`
    width: ${drawerWidth}px;
    border-right: 1px solid ${palette.divider};
    display: ${isDrawerOpen === true ? "flex" : "none"};
  `}
`;

const DrawerComponent = () => {
  const isDrawerOpen = useSelector((state) => getIsDrawerOpen(state));

  const isTemporaryDrawerOpen = useSelector((state) =>
    getIsTemporaryDrawerOpen(state)
  );

  const dispatch = useDispatch();

  const toggleDrawer = () => {
    dispatch(setIsTemporaryDrawerOpen(!isTemporaryDrawerOpen));
  };

  return (
    <StyledDrawer sc={{ isDrawerOpen }}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label={"Close navigation"}
          onClick={toggleDrawer}
          edge="start"
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      <Tabs />
    </StyledDrawer>
  );
};

export default DrawerComponent;
