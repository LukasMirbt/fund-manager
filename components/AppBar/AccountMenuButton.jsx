import React from "react";
import IconButton from "@material-ui/core/IconButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import Divider from "@material-ui/core/Divider";
import MenuList from "@material-ui/core/MenuList";
import { useDispatch, useSelector } from "react-redux";
import { setCredentials } from "../../redux/general/actionCreators";
import { getCredentials } from "../../redux/selectors";

const AccountButton = styled(IconButton)`
  position: absolute;
  right: 0.875rem;
  font-size: 1.75rem;
  padding: 0.625rem;
`;

const Username = styled.div`
  padding: 0.375rem 1rem 0.375rem 1rem;
  font-weight: bold;
  font-family: ${({ theme: { fontFamily } }) => fontFamily};
`;

const AccButtonWithMenu = () => {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const dispatch = useDispatch();

  const { username } = useSelector((state) => getCredentials(state));

  const logOut = () => {
    dispatch(
      setCredentials({
        username: undefined,
        token: undefined,
      })
    );
  };
  return (
    <>
      <AccountButton
        ref={anchorRef}
        onClick={handleToggle}
        color="inherit"
        aria-label="Account settings"
      >
        <FontAwesomeIcon icon={faUserCircle} />
      </AccountButton>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              marginTop: "0.25rem",
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id="menu-list-grow"
                  onKeyDown={handleListKeyDown}
                >
                  <Username>{username}</Username>
                  <Divider style={{ marginBottom: "0.5rem" }} />
                  {/* <MenuItem onClick={handleClose}>My account</MenuItem> */}
                  <MenuItem onClick={logOut}>Log out</MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
};

export default AccButtonWithMenu;
