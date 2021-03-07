const getDataChange = (numberOfYears, xData, yData) => {
  const firstDataPoint = yData[0];
  const lastDataPoint = yData[yData.length - 1];

  if (numberOfYears === 0) {
    return ((lastDataPoint / firstDataPoint - 1) * 100).toFixed(2);
  }

  const latestDateInMS = xData[xData.length - 1];

  const numOfDataPointsInXYears = xData.filter(
    (date) =>
      date >=
      new Date(latestDateInMS).setMonth(
        new Date(latestDateInMS).getMonth() - numberOfYears * 12
      )
  ).length;

  const earliestDataPointInXYears =
    yData[yData.length - numOfDataPointsInXYears];

  const change = (
    (lastDataPoint / earliestDataPointInXYears - 1) *
    100
  ).toFixed(2);

  return change;
};

export default getDataChange