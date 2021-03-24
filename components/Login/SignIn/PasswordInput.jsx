import TextField from "@material-ui/core/TextField";
import { useDispatch, useSelector } from "react-redux";
import { setSignInPasswordInputValue } from "../../../redux/general/actionCreators";
import {
  getIsSignInInvalid,
  getSignInPasswordInputValue,
} from "../../../redux/selectors";

const PasswordInput = () => {
  const signInPasswordInputValue = useSelector((state) =>
    getSignInPasswordInputValue(state)
  );

  const dispatch = useDispatch();

  const isSignInInvalid = useSelector((state) => getIsSignInInvalid(state));

  return (
    <TextField
      error={isSignInInvalid}
      helperText={
        isSignInInvalid === true ? "Invalid password or username" : undefined
      }
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
