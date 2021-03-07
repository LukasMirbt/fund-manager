import React from "react";
import TextField from "@material-ui/core/TextField";

const Inputs = ({ usernameInputRef, passwordInputRef }) => {
  return (
    <>
      <TextField
        inputRef={usernameInputRef}
        variant="outlined"
        fullWidth
        id="username"
        label="Username"
        name="username"
        autoComplete="off"
        autoFocus
      />
      <TextField
        inputRef={passwordInputRef}
        variant="outlined"
        margin="normal"
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="off"
      />
    </>
  );
};

export default Inputs;
