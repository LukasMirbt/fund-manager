import React from "react";
import styled from "styled-components";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import PasswordInput from "./PasswordInput";
import UsernameInput from "./UsernameInput";
import SignInButton from "./SignInButton";
import Links from "./Links";
import { useRouter } from "next/router";

const CheckboxElement = <Checkbox value="remember" color="primary" />;

const StyledForm = styled.form`
  width: 100%;
  margin-top: 0.5rem;
`;

const SignIn = () => {
  const router = useRouter();
  console.log(router.pathname);
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
