import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  getData,
  getExchangeRates,
  getSignInPasswordInputValue,
  getSignInUsernameInputValue,
} from "../../../redux/selectors";
import onSignIn from "./onSignIn";

const StyledButton = styled(Button)`
  margin: 1rem 0 1rem;
`;

const SignInButton = () => {
  const dispatch = useDispatch();

  const signInUsernameInputValue = useSelector((state) =>
    getSignInUsernameInputValue(state)
  );
  const signInPasswordInputValue = useSelector((state) =>
    getSignInPasswordInputValue(state)
  );

  const data = useSelector((state) => getData(state));
  const exchangeRates = useSelector((state) => getExchangeRates(state));

  return (
    <StyledButton
      onClick={() => {
        onSignIn({
          username: signInUsernameInputValue,
          password: signInPasswordInputValue,
          exchangeRates,
          data,
          dispatch,
        });
      }}
      type="submit"
      fullWidth
      variant="contained"
      color="primary"
    >
      Sign In
    </StyledButton>
  );
};

export default SignInButton;
