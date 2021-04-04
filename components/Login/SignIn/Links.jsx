import React from "react";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import { useDispatch } from "react-redux";
import { setIsSignUpShowing } from "../../../redux/general/actionCreators";

const Links = () => {
  const dispatch = useDispatch();
  return (
    <Grid container>
      <Grid item xs>
        <Link style={{ visibility: "hidden" }} href="#" variant="body2">
          Forgot password?
        </Link>
      </Grid>
      <Grid item>
        <Link
          onClick={() => {
            dispatch(setIsSignUpShowing(true));
          }}
          component="button"
          variant="body2"
        >
          {"Don't have an account? Sign Up"}
        </Link>
      </Grid>
    </Grid>
  );
};

export default Links;
