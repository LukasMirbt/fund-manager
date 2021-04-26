import React from "react";
import styled from "styled-components";
import Paper from "@material-ui/core/Paper";
import LoginTitle, { loginLabelID } from "./LoginTitle";
import LoginForm from "./LoginForm";
import Image from "next/image";

const Container = styled.section`
  flex-grow: 1;
  min-height: 600px;

  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const LoginContainer = styled(Paper)`
  flex-direction: column;
  padding: 1.5rem;
  margin: 1.5rem;
  z-index: 1;

  box-shadow: ${({ theme }) => theme.shadows[24]};
`;

const Login = () => {
  return (
    <Container aria-labelledby={loginLabelID}>
      <Image
        aria-hidden
        src="/investments.jpeg"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />

      <LoginContainer>
        <LoginTitle />

        <LoginForm />
      </LoginContainer>
    </Container>
  );
};

export default Login;
