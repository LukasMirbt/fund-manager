import pattern from "patternomaly";
import { primaryColor } from "../../theme";
import { START_DATE, END_DATE } from "../../common/constants";

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

  const startDate = dateParameters.start || START_DATE;
  const endDate = dateParameters.end || END_DATE;

  let firstXDataIndex;

  for (let index = 0; index < xData.length; index += 1) {
    if (xData[index] >= startDate) {
      firstXDataIndex = index;
      break;
    }
  }

  let lastXDataIndex;

  for (let index = xData.length; index >= 0; index -= 1) {
    if (xData[index] <= endDate) {
      lastXDataIndex = index;
      break;
    }
  }

  const xDataInTimespan = xData.slice(firstXDataIndex, lastXDataIndex + 1);
  const yDataInTimespan = yData.slice(firstXDataIndex, lastXDataIndex + 1);

  let chartData;

  if (isDataInPercent === true) {
    chartData = xDataInTimespan.map((date, index) => ({
      x: date,
      y:
        Math.round((yDataInTimespan[index] / yDataInTimespan[0]) * 10000) / 100,
    }));
  } else {
    chartData = xDataInTimespan.map((date, index) => ({
      x: date,
      y: yDataInTimespan[index],
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
    pointBorderWidth: 1,
    pointHoverRadius: 0,
    pointHoverBackgroundColor: "black",
    pointHoverBorderColor: "black",
    pointHoverBorderWidth: 2,
    pointRadius: 0.1,
    pointHitRadius: 10,
    data: chartData,
  };
};
export default getChartDataset;
