import React from "react";
import { useDispatch } from "react-redux";
import { setIsSignUpShowing } from "../../../redux/login/actionCreators";
import { StyledLink } from "../SignIn/SignUpLink";

const SignInLink = () => {
  const dispatch = useDispatch();

  return (
    <StyledLink
      onClick={() => {
        dispatch(setIsSignUpShowing(false));
      }}
      component="button"
      variant="body2"
    >
      {"Already have an account? Sign in"}
    </StyledLink>
  );
};

export default SignInLink;
