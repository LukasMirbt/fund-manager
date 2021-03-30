import TextField from "@material-ui/core/TextField";
import { useDispatch, useSelector } from "react-redux";
import { setSignInUsernameInputValue } from "../../../redux/general/actionCreators";
import {
  getSignInUsernameErrorMessage,
  getSignInUsernameInputValue,
} from "../../../redux/selectors";

const UsernameInput = () => {
  const signInUsernameInputValue = useSelector((state) =>
    getSignInUsernameInputValue(state)
  );

  const dispatch = useDispatch();

  const signInUsernameErrorMessage = useSelector((state) =>
    getSignInUsernameErrorMessage(state)
  );

  return (
    <TextField
      error={signInUsernameErrorMessage !== null}
      helperText={signInUsernameErrorMessage}
      value={signInUsernameInputValue}
      onChange={(e) => {
        dispatch(setSignInUsernameInputValue(e.target.value));
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
