import axios from "axios";
import { batch } from "react-redux";
import {
  setAlertSettings,
  setIsSignUpShowing,
  setSignUpPasswordErrorMessage,
  setSignUpUsernameErrorMessage,
} from "../../../redux/general/actionCreators";

const onSignUp = async ({ username, password, dispatch }) => {
  try {
    await axios.post("/api/createAccount", {
      username,
      password,
    });

    batch(() => {
      dispatch(setIsSignUpShowing(false));
      dispatch(
        setAlertSettings({
          isOpen: true,
          text: `User ${username} created successfully`,
          severity: "success",
        })
      );
    });
  } catch ({ response }) {
    const { usernameError, passwordError } = response.data;

    batch(() => {
      dispatch(setSignUpUsernameErrorMessage(usernameError));
      dispatch(setSignUpPasswordErrorMessage(passwordError));
    });
  }
};

export default onSignUp;
