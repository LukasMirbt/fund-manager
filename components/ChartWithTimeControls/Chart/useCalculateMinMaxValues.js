import { useRef } from "react";
import getMinValue from "./getMinValue";
import getMaxValue from "./getMaxValue";

const useCalculateMinMaxValues = (datasets, hiddenFunds) => {
  const derivedChartExtremePoints = {};

  derivedChartExtremePoints.max =
    datasets
      .map(e => e.data.map(f => f.y).sort((a, b) => b - a)[0])
      .sort((a, b) => b - a)[0] || 0;

  derivedChartExtremePoints.min =
    datasets
      .map(e => e.data.map(f => f.y).sort((a, b) => a - b)[0])
      .sort((a, b) => a - b)[0] || 0;

  const persistedChartExtremePoints = useRef({ ...derivedChartExtremePoints });

  const arePersistedChartExtremePointsUsed = useRef(false);

  const prevHiddenFunds = useRef(hiddenFunds);

  if (hiddenFunds !== prevHiddenFunds.current) {
    arePersistedChartExtremePointsUsed.current = false;
    if (
      persistedChartExtremePoints.current.max >=
        derivedChartExtremePoints.max &&
      persistedChartExtremePoints.current.min <= derivedChartExtremePoints.min
    ) {
      arePersistedChartExtremePointsUsed.current = true;
    }
    prevHiddenFunds.current = hiddenFunds;
  } else {
    persistedChartExtremePoints.current = { ...derivedChartExtremePoints };
  }

  const min =
    arePersistedChartExtremePointsUsed.current === true
      ? getMinValue(
          persistedChartExtremePoints.current.max,
          persistedChartExtremePoints.current.min
        )
      : getMinValue(
          derivedChartExtremePoints.max,
          derivedChartExtremePoints.min
        );

  const max =
    arePersistedChartExtremePointsUsed.current === true
      ? getMaxValue(
          persistedChartExtremePoints.current.max,
          persistedChartExtremePoints.current.min
        )
      : getMaxValue(
          derivedChartExtremePoints.max,
          derivedChartExtremePoints.min
        );

  return { min, max };
};

export default useCalculateMinMaxValues;
