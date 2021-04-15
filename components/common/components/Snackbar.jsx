import React from "react";
import styled from "styled-components";
import MUISnackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import { useSelector, useDispatch } from "react-redux";
import { getAlertSettings } from "../../../redux/selectors";
import { setAlertSettings } from "../../../redux/general/actionCreators";

const StyledAlert = styled(Alert)`
  background-color: ${({ sc: { severity } }) =>
    severity === "success" ? "#218821" : null};
`;

const anchorOrigin = {
  vertical: "bottom",
  horizontal: "left",
};

const Snackbar = () => {
  const { isOpen, severity, text } = useSelector((state) =>
    getAlertSettings(state)
  );

  const dispatch = useDispatch();

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    dispatch(
      setAlertSettings({
        isOpen: false,
      })
    );
  };

  return (
    <MUISnackbar
      data-cy="snackbar"
      autoHideDuration={6000}
      anchorOrigin={anchorOrigin}
      open={isOpen}
      onClose={handleClose}
    >
      <StyledAlert
        sc={{ severity }}
        elevation={6}
        variant="filled"
        onClose={handleClose}
        severity={severity}
      >
        {text}
      </StyledAlert>
    </MUISnackbar>
  );
};

export default Snackbar;
