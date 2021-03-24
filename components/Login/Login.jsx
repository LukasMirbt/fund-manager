import React, { useState } from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import MUIContainer from "@material-ui/core/Container";
import Copyright from "../Login/Copyright";
import Paper from "@material-ui/core/Paper";
import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUp/SignUp";
import { useSelector } from "react-redux";
import { getIsSignUpShowing } from "../../redux/selectors";

const loginLabelID = "loginLabel";

const Background = styled.section`
  width: calc(100% - 3rem);
  height: calc(100% - 3rem);
  margin: 1.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background-image: url("./laptops.jpeg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Title = styled(Typography)`
  font-size: 2rem;
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: center;
`;

const StyledAvatar = styled(Avatar)`
  margin: 0.5rem;
  background-color: ${({ theme }) => theme.palette.primary.main};
`;

const Container = styled(Paper)`
  flex-direction: column;
  padding: 1.5rem;
`;

const StyledMUIContainer = styled(MUIContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Login = () => {
  const isSignUpShowing = useSelector((state) => getIsSignUpShowing(state));

  return (
    <Background aria-labelledby={loginLabelID}>
      <Container>
        <Title id={loginLabelID} variant="h3" component="h1">
          {isSignUpShowing === true
            ? "Create an account"
            : "Sign in to view your portfolio"}
        </Title>

        <StyledMUIContainer maxWidth="xs">
          <StyledAvatar color="primary">
            <LockOutlinedIcon />
          </StyledAvatar>

          {isSignUpShowing === true ? <SignUp /> : <SignIn />}

          <Box mt={8}>
            <Copyright />
          </Box>
        </StyledMUIContainer>
      </Container>
    </Background>
  );
};

export default Login;
