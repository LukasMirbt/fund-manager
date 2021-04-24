import { batch } from "react-redux";
import {
  setCredentials,
  setIsUserRemembered,
} from "../../../redux/login/actionCreators";

const onMenuExit = ({ shouldSignOutRef, dispatch, router }) => {
  if (shouldSignOutRef.current === true) {
    window.localStorage.removeItem("token");

    batch(() => {
      dispatch(setCredentials({}));
      dispatch(setIsUserRemembered(false));
    });

    if (router.pathname.includes("portfolio") === false) {
      router.push("/portfolio");
    }

    shouldSignOutRef.current = false;
  }
};

export default onMenuExit;
