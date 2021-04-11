import React from "react";
import styled from "styled-components";
import { useDispatch, batch } from "react-redux";
import IconButton from "@material-ui/core/IconButton";
import {
  setInitialOpenDrawerTabIndex,
  setIsTemporaryDrawerOpen,
} from "../../../redux/general/actionCreators";
import EventIcon from "@material-ui/icons/Event";
import Tooltip from "@material-ui/core/Tooltip";

const StyledButton = styled(IconButton)`
  margin-right: 0.5rem;
`;

const OpenTimespanSettingsButton = () => {
  const dispatch = useDispatch();

  return (
    <Tooltip title="Open timespan settings" aria-label="Open timespan settings">
      <StyledButton
        onClick={() => {
          batch(() => {
            dispatch(setInitialOpenDrawerTabIndex(0));
            dispatch(setIsTemporaryDrawerOpen(true));
          });
        }}
      >
        <EventIcon />
      </StyledButton>
    </Tooltip>
  );
};

export default OpenTimespanSettingsButton;
