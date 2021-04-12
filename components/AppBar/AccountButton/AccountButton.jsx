import { useState, useRef } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getCredentials } from "../../../redux/selectors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import IconButton from "@material-ui/core/IconButton";
import SignedInMenu from "./SignedInMenu";
import SignedOutMenu from "./SignedOutMenu";
import Popover from "@material-ui/core/Popover";
import { useRouter } from "next/router";
import onMenuExit from "./onMenuExit";

const anchorOrigin = {
  vertical: "bottom",
  horizontal: "right",
};

const transformOrigin = {
  vertical: "top",
  horizontal: "right",
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

const AccountButton = () => {
  const credentials = useSelector((state) => getCredentials(state));

  const dispatch = useDispatch();

  const router = useRouter();

  const [anchorElement, setAnchorElement] = useState(null);

  const onClose = () => {
    setAnchorElement(null);
  };

  const shouldSignOutRef = useRef(false);

  return (
    <>
      <StyledIconButton
        data-cy="accountButton"
        aria-label="Open account menu"
        aria-controls="menuPopover"
        aria-haspopup="true"
        onClick={(event) => {
          setAnchorElement(event.currentTarget);
        }}
      >
        <Icon icon={faUserCircle} />
      </StyledIconButton>

      <Popover
        id="menuPopover"
        open={Boolean(anchorElement)}
        anchorOrigin={anchorOrigin}
        transformOrigin={transformOrigin}
        anchorEl={anchorElement}
        onClose={onClose}
        onExited={() => {
          onMenuExit({
            shouldSignOutRef,
            dispatch,
            router,
          });
        }}
      >
        {credentials.token !== undefined ? (
          <SignedInMenu shouldSignOutRef={shouldSignOutRef} onClose={onClose} />
        ) : (
          <SignedOutMenu onClose={onClose} />
        )}
      </Popover>
    </>
  );
};

export default AccountButton;
