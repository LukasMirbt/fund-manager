import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ChangeTimespan from "../ChangeTimespan";
import { setRecommendedDateParameters } from "../../../redux/recommendedFunds/actionCreators";
import { getRecommendedDateParameters } from "../../../redux/selectors";

const ChangeRecommendedTimespan = () => {
  const recommendedDateParameters = useSelector((state) =>
    getRecommendedDateParameters(state)
  );

  const dispatch = useDispatch();

  const setDateParameters = (params) => {
    dispatch(setRecommendedDateParameters(params));
  };

  return (
    <ChangeTimespan
      dateParameters={recommendedDateParameters}
      setDateParameters={setDateParameters}
    />
  );
};

export default ChangeRecommendedTimespan;
