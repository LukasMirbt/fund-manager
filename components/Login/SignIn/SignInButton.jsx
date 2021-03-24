import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  getSignInPasswordInputValue,
  getSignInUsernameInputValue,
} from "../../../redux/selectors";
import signIn from "./signIn";

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
        signIn({
          username: signInUsernameInputValue,
          password: signInPasswordInputValue,
          dispatch,
        });
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
