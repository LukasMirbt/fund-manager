const getChartDataset = (
  fundName,
  data,
  mainFundName,
  isDataInPercent,
  dateParameters,
  mainDatasetColor,
  totalXData
) => {
  const { xData, yData } = data[fundName].chartData;

  if (xData.length !== yData.length) {
    throw new Error("xData and yData don't have the same number of datapoints");
  }

  let startDate;

  if (totalXData !== undefined) {
    startDate =
      mainFundName === "Total"
        ? dateParameters.start || totalXData[0]
        : dateParameters.start || data[mainFundName].chartData.xData[0];
  } else {
    startDate = dateParameters.start || data[mainFundName].chartData.xData[0];
  }

  const endDate = dateParameters.end || new Date();

  const xDataFilteredByStartDate = xData.filter((date) => date >= startDate);

  const filteredXData = xDataFilteredByStartDate.filter(
    (date) => date <= endDate
  );

  const numberToRemoveFromStartOfYData =
    xData.length - xDataFilteredByStartDate.length;

  const numberToRemoveFromEndOfYData =
    xDataFilteredByStartDate.length - filteredXData.length;

  const filteredYData = yData.slice(
    numberToRemoveFromStartOfYData,
    yData.length - numberToRemoveFromEndOfYData
  );

  let filteredChartData;

  if (isDataInPercent === true) {
    filteredChartData = filteredXData.map((date, index) => ({
      x: date,
      y: Math.round((filteredYData[index] / filteredYData[0]) * 10000) / 100,
    }));
  } else {
    filteredChartData = filteredXData.map((date, index) => ({
      x: date,
      y: filteredYData[index],
    }));
  }

  let backgroundColor;

  if (fundName === "Total") {
    backgroundColor = "red";
  } else {
    backgroundColor =
      mainFundName === fundName ? mainDatasetColor : data[fundName].color;
  }

  return {
    label: fundName,
    backgroundColor,
    borderColor: backgroundColor,
    /*  pointBorderColor: '#4ef442', */
    /* pointBackgroundColor: '#fff', */
    pointBorderWidth: 1,
    pointHoverRadius: 0,
    pointHoverBackgroundColor: "black",
    pointHoverBorderColor: "black",
    pointHoverBorderWidth: 2,
    pointRadius: 0.1,
    pointHitRadius: 10,
    data: filteredChartData,
  };
};
export default getChartDataset;
