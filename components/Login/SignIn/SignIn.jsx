import React, { useEffect } from "react";
import styled from "styled-components";
import PasswordInput from "./PasswordInput";
import UsernameInput from "./UsernameInput";
import SignInButton from "./SignInButton";
import Links from "./Links";
import { useDispatch } from "react-redux";
import {
  setSignInPasswordErrorMessage,
  setSignInPasswordInputValue,
  setSignInUsernameErrorMessage,
  setSignInUsernameInputValue,
} from "../../../redux/general/actionCreators";
import RememberUserCheckbox from "./RememberUserCheckbox";

const StyledForm = styled.form`
  width: 100%;
  margin-top: 0.5rem;
`;

const SignIn = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(setSignInUsernameInputValue(""));
      dispatch(setSignInPasswordInputValue(""));
      dispatch(setSignInUsernameErrorMessage(null));
      dispatch(setSignInPasswordErrorMessage(null));
    };
  }, [dispatch]);

  return (
    <StyledForm
      onSubmit={(e) => {
        e.preventDefault();
      }}
      noValidate
    >
      <UsernameInput />
      <PasswordInput />

      <RememberUserCheckbox />

      <SignInButton />

      <Links />
    </StyledForm>
  );
};

export default SignIn;
