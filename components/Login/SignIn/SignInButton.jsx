import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { batch, useDispatch, useSelector } from "react-redux";
import {
  getSignInPasswordInputValue,
  getSignInUsernameInputValue,
} from "../../../redux/selectors";
import onSignIn from "./onSignIn";
import {
  setSignInPasswordErrorMessage,
  setSignInUsernameErrorMessage,
} from "../../../redux/general/actionCreators";

const StyledButton = styled(Button)`
  margin: 1rem 0 1rem;
`;

const SignInButton = () => {
  const dispatch = useDispatch();

  const signInUsernameInputValue = useSelector((state) =>
    getSignInUsernameInputValue(state)
  );
  const signInPasswordInputValue = useSelector((state) =>
    getSignInPasswordInputValue(state)
  );

  return (
    <StyledButton
      onClick={() => {
        if (
          signInUsernameInputValue.length < 3 ||
          signInPasswordInputValue.length < 3
        ) {
          batch(() => {
            dispatch(
              setSignInUsernameErrorMessage(
                "Username and password must be at least 3 characters long"
              )
            );
            dispatch(
              setSignInPasswordErrorMessage(
                "Username and password must be at least 3 characters long"
              )
            );
          });
        } else {
          dispatch(onSignIn());
        }
      }}
      type="submit"
      fullWidth
      variant="contained"
      color="primary"
    >
      Sign In
    </StyledButton>
  );
};

export default SignInButton;
