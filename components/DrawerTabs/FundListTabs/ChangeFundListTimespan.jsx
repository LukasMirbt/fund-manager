import { useSelector, useDispatch } from "react-redux";
import ChangeTimespan from "../ChangeTimespan";
import { setDateParameters } from "../../../redux/fundList/actionCreators";
import { getDateParameters } from "../../../redux/selectors";

const ChangeFundListTimespan = () => {
  const dateParameters = useSelector((state) => getDateParameters(state));
  const dispatch = useDispatch();

  const setDateParams = (params) => {
    dispatch(setDateParameters(params));
  };

  return (
    <ChangeTimespan
      setDateParameters={setDateParams}
      dateParameters={dateParameters}
    />
  );
};

export default ChangeFundListTimespan;
