import TextField from "@material-ui/core/TextField";
import { useDispatch, useSelector } from "react-redux";
import { setSignUpPasswordInputValue } from "../../../redux/general/actionCreators";
import { getSignUpPasswordInputValue } from "../../../redux/selectors";

const PasswordInput = () => {
  const signUpPasswordInputValue = useSelector((state) =>
    getSignUpPasswordInputValue(state)
  );

  const dispatch = useDispatch();

  return (
    <TextField
      value={signUpPasswordInputValue}
      onChange={(e) => {
        dispatch(setSignUpPasswordInputValue(e.target.value));
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
