import React, { useEffect } from "react";
import styled from "styled-components";
import PasswordInput from "./PasswordInput";
import UsernameInput from "./UsernameInput";
import SignInButton from "./SignInButton";
import SignUpLink from "./SignUpLink";
import { useDispatch } from "react-redux";
import { resetSignInState } from "../../../redux/login/actionCreators";
import RememberUserCheckbox from "./RememberUserCheckbox";

const Container = styled.div`
  width: 100%;
  margin-top: 0.5rem;
`;

const SignIn = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(resetSignInState());
    };
  }, [dispatch]);

  return (
    <Container>
      <UsernameInput />
      <PasswordInput />

      <RememberUserCheckbox />

      <SignInButton />

      <SignUpLink />
    </Container>
  );
};

export default SignIn;
