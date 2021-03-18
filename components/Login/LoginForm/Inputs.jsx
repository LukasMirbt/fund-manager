import React, { useRef, useState } from "react";
import TextField from "@material-ui/core/TextField";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { useDispatch, batch } from "react-redux";
import axios from "axios";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import {
  setCredentials,
  setFundData,
  showNotification,
} from "../../../redux/general/actionCreators";
import { setInitialPortfolioState } from "../../../redux/portfolio/actionCreators";
import createInitialPortfolioState from "../../../redux/createInitialPortfolioState";

const CheckboxElement = <Checkbox value="remember" color="primary" />;

const StyledButton = styled(Button)`
  margin: 1rem 0 1rem;
`;

const Inputs = () => {
  const dispatch = useDispatch();

  const usernameInputRef = useRef();
  const passwordInputRef = useRef();

  const [isInvalid, setIsInvalid] = useState(false);

  const logIn = async () => {
    try {
      const {
        data: { token, initialPortfolioData },
      } = await axios.post("/api/", {
        username: usernameInputRef.current.value,
        password: passwordInputRef.current.value,
      });

      const initialPortfolioState = createInitialPortfolioState(
        initialPortfolioData
      );

      const {
        totalChanges,
        totalXData,
        totalYData,
      } = initialPortfolioData.portfolioData;

      batch(() => {
        dispatch(
          setCredentials({
            username: usernameInputRef.current.value,
            token,
          })
        );

        dispatch(
          setFundData({
            fundName: "Total",
            fundData: {
              chartData: {
                xData: totalXData,
                yData: totalYData,
              },
              tableData: {
                fundName: "Total",
                ...totalChanges,
              },
            },
          })
        );
        dispatch(setInitialPortfolioState(initialPortfolioState));
      });
    } catch (e) {
      /*       dispatch(
        showNotification({
          text: "Invalid password or username!",
          severity: "error",
        })
      ); */
      setIsInvalid(true);
    }
  };

  return (
    <>
      <TextField
        error={isInvalid}
        helperText={
          isInvalid === true ? "Invalid password or username" : undefined
        }
        inputRef={usernameInputRef}
        variant="outlined"
        fullWidth
        id="username"
        label="Username"
        name="username"
        autoComplete="off"
        autoFocus
      />
      <TextField
        error={isInvalid}
        helperText={
          isInvalid === true ? "Invalid password or username" : undefined
        }
        inputRef={passwordInputRef}
        variant="outlined"
        margin="normal"
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="off"
      />

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
    </>
  );
};

export default Inputs;
