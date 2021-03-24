import axios from "axios";
import {
  setIsSignUpInvalid,
  setIsSignUpShowing,
} from "../../../redux/general/actionCreators";

const signUp = async ({ username, password, dispatch }) => {
  try {
    await axios.post("/api/createAccount", {
      username,
      password,
    });

    dispatch(setIsSignUpShowing(false));
  } catch (e) {
    dispatch(setIsSignUpInvalid(true));
  }
};

export default signUp;
