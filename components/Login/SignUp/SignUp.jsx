import React, { useEffect } from "react";
import styled from "styled-components";
import PasswordInput from "./PasswordInput";
import UsernameInput from "./UsernameInput";
import SignUpButton from "./SignUpButton";
import Links from "./SignInLink";
import { useDispatch } from "react-redux";
import { resetSignUpState } from "../../../redux/login/actionCreators";

const Container = styled.div`
  width: 100%;
  margin-top: 0.5rem;
`;

const SignUp = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(resetSignUpState());
    };
  }, [dispatch]);

  return (
    <Container>
      <UsernameInput />
      <PasswordInput />

      <SignUpButton />

      <Links />
    </Container>
  );
};

export default SignUp;
