import React from "react";
import { useSelector } from "react-redux";
import { getFundNames, getIsFundListShowing } from "../../redux/selectors";
import ChartWithTimeControls from "../ChartWithTimeControls/ChartWithTimeControls";

const containerCSS = `
  width: 50%;
  height: 100%;
`;

const fullscreenCSS = `
  width: 100%;
  height: 100%;
`;

const FundListChart = () => {
  const fundNames = useSelector((state) => getFundNames(state));

  const isFundListShowing = useSelector((state) => getIsFundListShowing(state));

  /*   const { min, max } = useCalculateMinMaxValues(datasets, hiddenFunds); */

  return (
    <ChartWithTimeControls
      fundNames={fundNames}
      /*       min={min}
      max={max} */
      containerCSS={isFundListShowing === true ? containerCSS : fullscreenCSS}
    />
  );
};

export default FundListChart;
