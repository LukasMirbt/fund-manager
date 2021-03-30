import { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector, batch } from "react-redux";
import { getCredentials } from "../../redux/selectors";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import {
  setCredentials,
  setIsUserRemembered,
} from "../../redux/general/actionCreators";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import IconButton from "@material-ui/core/IconButton";

const anchorOrigin = {
  vertical: "bottom",
  horizontal: "center",
};

const transformOrigin = {
  vertical: "top",
  horizontal: "center",
};

const StyledIconButton = styled(IconButton)`
  color: white;
  padding: 0.625rem;

  &:hover {
    background-color: rgba(255, 255, 255, 0.08);
  }
`;

const Icon = styled(FontAwesomeIcon)`
  font-size: 1.75rem;
`;

const StyledMenuItem = styled(MenuItem)`
  width: 240px;
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
      <StyledIconButton onClick={handleClick}>
        <Icon icon={faUserCircle} />
      </StyledIconButton>

      <Menu
        id="accountMenu"
        getContentAnchorEl={null}
        anchorOrigin={anchorOrigin}
        transformOrigin={transformOrigin}
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem
          onClick={() => {
            window.localStorage.removeItem("token");
            batch(() => {
              dispatch(setCredentials({}));
              dispatch(setIsUserRemembered(false));
            });

            handleClose();
          }}
        >
          Sign out
        </StyledMenuItem>
      </Menu>
    </>
  ) : null;
};

export default AccountButton;
