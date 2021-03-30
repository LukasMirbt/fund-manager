import TextField from "@material-ui/core/TextField";
import { useDispatch, useSelector } from "react-redux";
import { setSignUpUsernameInputValue } from "../../../redux/general/actionCreators";
import {
  getSignUpUsernameErrorMessage,
  getSignUpUsernameInputValue,
} from "../../../redux/selectors";

const UsernameInput = () => {
  const signUpUsernameInputValue = useSelector((state) =>
    getSignUpUsernameInputValue(state)
  );

  const dispatch = useDispatch();

  const signUpUsernameErrorMessage = useSelector((state) =>
    getSignUpUsernameErrorMessage(state)
  );

  return (
    <TextField
      error={signUpUsernameErrorMessage !== null}
      helperText={signUpUsernameErrorMessage}
      value={signUpUsernameInputValue}
      onChange={(e) => {
        dispatch(setSignUpUsernameInputValue(e.target.value));
      }}
      variant="outlined"
      fullWidth
      id="username"
      label="Username"
      name="username"
      autoComplete="off"
      autoFocus
    />
  );
};

export default UsernameInput;
