import pattern from "patternomaly";
import { primaryColor } from "../../theme";

const getChartDataset = ({
  data,
  fundName,
  isDataInPercent,
  dateParameters,
  patterns,
  arePatternsShowing,
  index,
}) => {
  const { xData, yData } = data[fundName].chartData;

  const startDate = dateParameters.start || new Date(0);

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

  let color;

  if (arePatternsShowing === true) {
    color =
      index < patterns.length - 1
        ? pattern.draw(...patterns[index])
        : primaryColor;
  } else {
    color = index < patterns.length - 1 ? patterns[index][1] : primaryColor;
  }

  return {
    label: fundName,
    backgroundColor: color,
    borderColor: color,
    /*     backgroundColor,
    borderColor: backgroundColor, */
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
