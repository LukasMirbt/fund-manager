import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import MuiSnackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import MuiAlert from "@material-ui/lab/Alert";
import { useSelector, useDispatch } from "react-redux";
import {
  getIsSnackbarHidden,
  getSnackbarText,
  getSnackbarSeverity,
} from "../../../redux/selectors";
import { setIsSnackbarHidden } from "../../../redux/general/actionCreators";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Snackbar = () => {
  const isSnackbarHidden = useSelector((state) => getIsSnackbarHidden(state));
  const snackbarText = useSelector((state) => getSnackbarText(state));
  const snackbarSeverity = useSelector((state) => getSnackbarSeverity(state));

  const dispatch = useDispatch();

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    dispatch(setIsSnackbarHidden(true));
  };

  return (
    <div>
      <MuiSnackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={!isSnackbarHidden}
        autoHideDuration={5000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity={snackbarSeverity}>
          {snackbarText}
        </Alert>
      </MuiSnackbar>
    </div>
  );
};

export default Snackbar;
