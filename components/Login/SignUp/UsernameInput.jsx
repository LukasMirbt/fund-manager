import TextField from "@material-ui/core/TextField";
import { useDispatch, useSelector } from "react-redux";
import { setSignUpUsernameInputValue } from "../../../redux/general/actionCreators";
import {
  getIsSignUpInvalid,
  getSignUpUsernameInputValue,
} from "../../../redux/selectors";

const UsernameInput = () => {
  const signUpUsernameInputValue = useSelector((state) =>
    getSignUpUsernameInputValue(state)
  );

  const dispatch = useDispatch();

  const isSignUpInvalid = useSelector((state) => getIsSignUpInvalid(state));

  return (
    <TextField
      error={isSignUpInvalid}
      helperText={isSignUpInvalid === true ? "Username is taken" : undefined}
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
