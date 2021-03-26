import React, { useEffect } from "react";
import styled from "styled-components";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import PasswordInput from "./PasswordInput";
import UsernameInput from "./UsernameInput";
import SignInButton from "./SignInButton";
import Links from "./Links";
import { useDispatch } from "react-redux";
import {
  setSignInPasswordInputValue,
  setSignInUsernameInputValue,
} from "../../../redux/general/actionCreators";

const CheckboxElement = <Checkbox value="remember" color="primary" />;

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

      <FormControlLabel control={CheckboxElement} label="Remember me" />

      <SignInButton />

      <Links />
    </StyledForm>
  );
};

export default SignIn;
