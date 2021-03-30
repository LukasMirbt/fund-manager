import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { useDispatch, useSelector } from "react-redux";
import { getIsUserRemembered } from "../../../redux/selectors";
import { setIsUserRemembered } from "../../../redux/general/actionCreators";

const RememberUserCheckbox = () => {
  const isUserRemembered = useSelector((state) => getIsUserRemembered(state));

  const dispatch = useDispatch();
  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={isUserRemembered}
          onChange={(event) => {
            dispatch(setIsUserRemembered(event.target.checked));
          }}
          value="remember"
          color="primary"
        />
      }
      label="Remember me"
    />
  );
};

export default RememberUserCheckbox;
