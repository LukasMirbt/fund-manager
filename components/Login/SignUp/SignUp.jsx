import React, { useEffect } from "react";
import styled from "styled-components";
import Checkbox from "@material-ui/core/Checkbox";
import PasswordInput from "./PasswordInput";
import UsernameInput from "./UsernameInput";
import SignUpButton from "./SignUpButton";
import Links from "./Links";
import { useDispatch } from "react-redux";
import {
  setSignUpPasswordInputValue,
  setSignUpUsernameInputValue,
} from "../../../redux/general/actionCreators";

const CheckboxElement = <Checkbox value="remember" color="primary" />;

const StyledForm = styled.form`
  width: 100%;
  margin-top: 0.5rem;
`;

const SignUp = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(setSignUpUsernameInputValue(""));
      dispatch(setSignUpPasswordInputValue(""));
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

      {/*       <FormControlLabel control={CheckboxElement} label="Remember me" /> */}

      <SignUpButton />

      <Links />
    </StyledForm>
  );
};

export default SignUp;
