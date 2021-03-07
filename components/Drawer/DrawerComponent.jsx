import Tabs from "../DrawerTabs/Tabs";
import styled, { css } from "styled-components";
import { useSelector } from "react-redux";
import { getIsDrawerOpen } from "../../redux/selectors";

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

  return (
    <StyledDrawer sc={{ isDrawerOpen }}>
      <Tabs />
    </StyledDrawer>
  );
};

export default DrawerComponent;
