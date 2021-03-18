import React from "react";
import styled from "styled-components";
import { batch, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import IconButton from "@material-ui/core/IconButton";
import {
  setInitialOpenDrawerTabIndex,
  setIsTemporaryDrawerOpen,
} from "../../../redux/general/actionCreators";
import Tooltip from "@material-ui/core/Tooltip";

const StyledButton = styled(IconButton)`
  margin-left: 0.5rem;
`;

const SettingsButton = () => {
  const dispatch = useDispatch();

  return (
    <Tooltip title="Open settings" aria-label="Open settings">
      <StyledButton
        onClick={() => {
          batch(() => {
            dispatch(setInitialOpenDrawerTabIndex(1));
            dispatch(setIsTemporaryDrawerOpen(true));
          });
        }}
      >
        <FontAwesomeIcon icon={faCog} />
      </StyledButton>
    </Tooltip>
  );
};

export default SettingsButton;
