import React from "react";
import styled from "styled-components";
import Paper from "@material-ui/core/Paper";
import LoginTitle, { loginLabelID } from "./LoginTitle";
import LoginForm from "./LoginForm";

const Background = styled.section`
  flex-grow: 1;
  min-height: 600px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background-image: url("./investments.jpeg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Container = styled(Paper)`
  flex-direction: column;
  padding: 1.5rem;
  margin: 1.5rem;

  box-shadow: ${({ theme }) => theme.shadows[24]};
`;

const Login = () => {
  return (
    <Background aria-labelledby={loginLabelID}>
      <Container>
        <LoginTitle />

        <LoginForm />
      </Container>
    </Background>
  );
};

export default Login;
