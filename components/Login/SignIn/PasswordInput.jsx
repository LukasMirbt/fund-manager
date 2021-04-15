import TextField from "@material-ui/core/TextField";
import { useDispatch, useSelector } from "react-redux";
import { setSignInPasswordInputValue } from "../../../redux/general/actionCreators";
import {
  getSignInPasswordErrorMessage,
  getSignInPasswordInputValue,
} from "../../../redux/selectors";

const PasswordInput = () => {
  const signInPasswordInputValue = useSelector((state) =>
    getSignInPasswordInputValue(state)
  );

  const dispatch = useDispatch();

  const signInPasswordErrorMessage = useSelector((state) =>
    getSignInPasswordErrorMessage(state)
  );

  return (
    <TextField
      data-cy="signInPasswordInput"
      error={signInPasswordErrorMessage !== null}
      helperText={signInPasswordErrorMessage}
      value={signInPasswordInputValue}
      onChange={(e) => {
        dispatch(setSignInPasswordInputValue(e.target.value));
      }}
      variant="outlined"
      margin="normal"
      fullWidth
      name="password"
      label="Password"
      type="password"
      id="password"
      autoComplete="off"
    />
  );
};

export default PasswordInput;
