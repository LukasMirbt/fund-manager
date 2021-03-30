import axios from "axios";
import { batch } from "react-redux";
import {
  setIsSignUpShowing,
  setSignUpPasswordErrorMessage,
  setSignUpUsernameErrorMessage,
} from "../../../redux/general/actionCreators";

const signUp = async ({ username, password, dispatch }) => {
  try {
    await axios.post("/api/createAccount", {
      username,
      password,
    });

    dispatch(setIsSignUpShowing(false));
  } catch ({ response }) {
    const { usernameError, passwordError } = response.data;

    batch(() => {
      dispatch(setSignUpUsernameErrorMessage(usernameError));
      dispatch(setSignUpPasswordErrorMessage(passwordError));
    });
  }
};

export default signUp;
