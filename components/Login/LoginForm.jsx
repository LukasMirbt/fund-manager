import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MUIContainer from "@material-ui/core/Container";
import Copyright from "../Login/Copyright";
import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUp/SignUp";
import { CircularProgress } from "@material-ui/core";
import Lock from "./Lock";
import { useDispatch, useSelector } from "react-redux";
import { getIsSignUpShowing } from "../../redux/selectors";
import { setIsSignUpShowing } from "../../redux/general/actionCreators";
import signInWithToken from "./SignIn/signInWithToken";

const Container = styled(MUIContainer)`
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

const LoginForm = () => {
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
    <Container maxWidth="xs">
      <Lock />

      <SpinnerContainer>
        <FormContainer sc={{ isSpinnerShowing }}>
          {isSignUpShowing === true ? <SignUp /> : <SignIn />}
        </FormContainer>

        {isSpinnerShowing === true && <Spinner />}
      </SpinnerContainer>

      <Copyright />
    </Container>
  );
};

export default LoginForm;
