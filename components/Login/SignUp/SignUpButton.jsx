import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  getSignUpPasswordInputValue,
  getSignUpUsernameInputValue,
} from "../../../redux/selectors";
import signUp from "./signUp";

const StyledButton = styled(Button)`
  margin: 1rem 0 1rem;
`;

const SignUpButton = () => {
  const dispatch = useDispatch();

  const signUpUsernameInputValue = useSelector((state) =>
    getSignUpUsernameInputValue(state)
  );
  const signUpPasswordInputValue = useSelector((state) =>
    getSignUpPasswordInputValue(state)
  );

  return (
    <StyledButton
      onClick={() => {
        signUp({
          username: signUpUsernameInputValue,
          password: signUpPasswordInputValue,
          dispatch,
        });
      }}
      type="submit"
      fullWidth
      variant="contained"
      color="primary"
    >
      Sign Up
    </StyledButton>
  );
};

export default SignUpButton;
