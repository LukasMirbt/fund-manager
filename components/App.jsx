import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import axios from "axios";
import Login from "./Login/Login";
import Snackbar from "./common/components/Snackbar";
import { getCredentials } from "../redux/selectors";
/* import { initializeAppState } from "../redux/general/actionCreators"; */
import AppBar from "./AppBar/AppBar";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
  position: absolute;
`;

const App = () => {
  /*   const { token, username } = useSelector((state) => getCredentials(state)); */
  const token = "";

  const dispatch = useDispatch();

  useEffect(() => {
    const initAppState = async () => {
      try {
        const { data } = await axios.post("/", {
          username: "test",
          password: "test",
        });

        dispatch(initializeAppState(data));
      } catch (e) {
        console.log(e);
      }
    };

    initAppState();
  }, [dispatch]);

  return (
    <>
      {/*       {token === undefined ? (
        <Login />
      ) : (
        <> */}
      <AppBar />
      <Main />
      {/*      </>
      )} */}

      <Snackbar />
    </>
  );
};

export default App;
