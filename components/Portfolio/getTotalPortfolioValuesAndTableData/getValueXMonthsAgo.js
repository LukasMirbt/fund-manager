const getValueXMonthsAgo = (numOfMonths, data) => {
  const { xData, yData } = data;

  const lastDataPoint = yData[yData.length - 1];

  if (numOfMonths === 0) {
    return lastDataPoint;
  }

  const latestDateInMS = xData[xData.length - 1];

  const numOfDataPointsInXMonths = xData.filter(
    date =>
      date >=
      new Date(latestDateInMS).setMonth(
        new Date(latestDateInMS).getMonth() - numOfMonths
      )
  ).length;

  const valueXMonthsAgo = yData[yData.length - numOfDataPointsInXMonths];

  return valueXMonthsAgo;
};

export default getValueXMonthsAgo;
