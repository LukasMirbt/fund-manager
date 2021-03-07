import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import { useRouter } from "next/router";
import {
  setCredentials,
  showNotification,
} from "../../../redux/general/actionCreators";
import axios from "axios";
import { useDispatch } from "react-redux";

const StyledButton = styled(Button)`
  margin: 1rem 0 1rem;
`;

const CheckboxElement = <Checkbox value="remember" color="primary" />;

const Items = ({ usernameInputRef, passwordInputRef }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const logIn = async () => {
    try {
      const {
        data: { token },
      } = await axios.post("/api/", {
        username: usernameInputRef.current.value,
        password: passwordInputRef.current.value,
      });

      /*   dispatch(initializeAppState(data)); */
      /*  router.push("/fund-list"); */
      dispatch(
        setCredentials({
          username: usernameInputRef.current.value,
          token,
        })
      );
    } catch (e) {
      dispatch(
        showNotification({
          text: "Invalid password or username!",
          severity: "error",
        })
      );
    }
  };

  return (
    <>
      <FormControlLabel control={CheckboxElement} label="Remember me" />
      <StyledButton
        onClick={logIn}
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
      >
        Sign In
      </StyledButton>
      <Grid container>
        <Grid item xs>
          <Link href="#" variant="body2">
            Forgot password?
          </Link>
        </Grid>
        <Grid item>
          <Link href="#" variant="body2">
            {"Don't have an account? Sign Up"}
          </Link>
        </Grid>
      </Grid>
    </>
  );
};

export default Items;
