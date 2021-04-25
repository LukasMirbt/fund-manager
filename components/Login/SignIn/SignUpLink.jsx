import React from "react";
import styled from "styled-components";
import Link from "@material-ui/core/Link";
import { useDispatch } from "react-redux";
import { setIsSignUpShowing } from "../../../redux/login/actionCreators";

export const StyledLink = styled(Link)`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

const SignUpLink = () => {
  const dispatch = useDispatch();

  return (
    <StyledLink
      data-testid="goToSignUpLink"
      onClick={() => {
        dispatch(setIsSignUpShowing(true));
      }}
      component="button"
      variant="body2"
    >
      {"Don't have an account? Sign Up"}
    </StyledLink>
  );
};

export default SignUpLink;
