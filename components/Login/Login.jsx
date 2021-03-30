import React, { useEffect, useState } from "react";
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
import { useSelector, useDispatch } from "react-redux";
import { getIsSignUpShowing } from "../../redux/selectors";
import { setIsSignUpShowing } from "../../redux/general/actionCreators";
import { CircularProgress } from "@material-ui/core";
import signInWithToken from "./SignIn/signInWithToken";

const loginLabelID = "loginLabel";

const Background = styled.section`
  flex-grow: 1;

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

const FormContainer = styled.div`
  visibility: ${({ sc: { isSpinnerShowing } }) =>
    isSpinnerShowing === true ? "hidden" : "visible"};
`;

const SpinnerContainer = styled.div`
  position: relative;
`;

const Spinner = styled(CircularProgress)`
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;

const Login = () => {
  const isSignUpShowing = useSelector((state) => getIsSignUpShowing(state));

  const dispatch = useDispatch();

  const [isSpinnerShowing, setIsSpinnerShowing] = useState(true);

  useEffect(() => {
    const token = window.localStorage.getItem("token");

    if (token !== null) {
      dispatch(signInWithToken(token));
    } else {
      setIsSpinnerShowing(false);
    }

    return () => {
      dispatch(setIsSignUpShowing(false));
    };
  }, [dispatch]);

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

          <SpinnerContainer>
            <FormContainer sc={{ isSpinnerShowing }}>
              {isSignUpShowing === true ? <SignUp /> : <SignIn />}
            </FormContainer>

            {isSpinnerShowing === true && <Spinner />}
          </SpinnerContainer>
          <Box mt={8}>
            <Copyright />
          </Box>
        </StyledMUIContainer>
      </Container>
    </Background>
  );
};

export default Login;
