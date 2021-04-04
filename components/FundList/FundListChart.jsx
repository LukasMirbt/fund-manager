import React from "react";
import { useSelector } from "react-redux";
import { getFundNames } from "../../redux/selectors";
import ChartWithTimeControls from "../ChartWithTimeControls/ChartWithTimeControls";

const FundListChart = () => {
  const fundNames = useSelector((state) => getFundNames(state));

  return <ChartWithTimeControls fundNames={fundNames} />;
};

export default FundListChart;
