import { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton";
import { useDispatch, useSelector } from "react-redux";
import { getCredentials } from "../../redux/selectors";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { setCredentials } from "../../redux/general/actionCreators";

const anchorOrigin = {
  vertical: "bottom",
  horizontal: "center",
};

const transformOrigin = {
  vertical: "top",
  horizontal: "center",
};

const StyledButton = styled(IconButton)`
  padding: 0;
`;

const StyledAvatar = styled(Avatar)`
  background-color: green;
`;

const StyledMenuItem = styled(MenuItem)`
  width: 240px;
`;

const Row = styled.div`
  display: flex;
`;

const AccountButton = () => {
  const credentials = useSelector((state) => getCredentials(state));

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const dispatch = useDispatch();

  return credentials.token !== undefined ? (
    <>
      <StyledButton onClick={handleClick}>
        <StyledAvatar>T</StyledAvatar>
      </StyledButton>
      <Menu
        id="simple-menu"
        getContentAnchorEl={null}
        anchorOrigin={anchorOrigin}
        transformOrigin={transformOrigin}
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem onClick={handleClose}>My account</StyledMenuItem>
        <StyledMenuItem
          onClick={() => {
            dispatch(setCredentials({}));
            handleClose();
          }}
        >
          Logout
        </StyledMenuItem>
      </Menu>
    </>
  ) : null;
};

export default AccountButton;
