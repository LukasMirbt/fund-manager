import React from "react";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import { useDispatch } from "react-redux";
import { setIsSignUpShowing } from "../../../redux/general/actionCreators";

const Links = () => {
  const dispatch = useDispatch();
  return (
    <Grid container justify="flex-end">
      <Grid item>
        <Link
          onClick={() => {
            dispatch(setIsSignUpShowing(false));
          }}
          component="button"
          variant="body2"
        >
          Already have an account? Sign in
        </Link>
      </Grid>
    </Grid>
  );
};

export default Links;
