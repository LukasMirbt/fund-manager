import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ChangeTimespan from "../ChangeTimespan";
import { setPortfolioDateParameters } from "../../../redux/portfolio/actionCreators";
import { getPortfolioDateParameters } from "../../../redux/selectors";

const ChangePortfolioTimespan = () => {
  const portfolioDateParameters = useSelector((state) =>
    getPortfolioDateParameters(state)
  );

  const dispatch = useDispatch();

  const setDateParameters = (params) => {
    dispatch(setPortfolioDateParameters(params));
  };

  return (
    <ChangeTimespan
      setDateParameters={setDateParameters}
      dateParameters={portfolioDateParameters}
    />
  );
};

export default ChangePortfolioTimespan;
