import React from "react";
import styled, { css } from "styled-components";
import Typography from "@material-ui/core/Typography";
import { useSelector } from "react-redux";
import { getIsSignUpShowing } from "../../redux/selectors";

export const loginLabelID = "loginLabel";

const Title = styled(Typography)`
  font-size: 1.875rem;
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: center;

  ${({ theme }) => css`
    @media screen and (min-width: ${`${theme.breakpoints.values["md"]}px`}) {
      font-size: 2rem;
    }
  `}
`;

const LoginTitle = () => {
  const isSignUpShowing = useSelector((state) => getIsSignUpShowing(state));

  return (
    <Title data-cy="loginLabel" id={loginLabelID} variant="h3" component="h2">
      {isSignUpShowing === true
        ? "Create an account"
        : "Sign in to view your portfolio"}
    </Title>
  );
};

export default LoginTitle;
