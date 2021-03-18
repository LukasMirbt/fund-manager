import getCurrencyFromFundName from "./getCurrencyFromFundName";
import getNumberOfSharesAndAcquisitionValue from "./getNumberOfSharesAndAcquisitionValue";
import getTotalChanges from "./getTotalChanges";
import getValueXMonthsAgo from "./getValueXMonthsAgo";

const getTotalPortfolioValuesAndTableData = (
  portfolio,
  exchangeRates,
  data
) => {
  if (Object.keys(portfolio).length === 0) {
    return {};
  }
  const changeKeys = [
    "oneDC",
    /* "1 month", "6 months", */ "oneYC",
    "threeYC",
    "fiveYC",
  ];
  const changes = {};
  const tableData = [];

  const earliestDatePerFund = {};

  const portfolioFundNames = Object.keys(portfolio);

  const [currentTotalValue, acquisitionTotalValue] = portfolioFundNames
    .map((fundName) => {
      const { chartData } = data[fundName];
      const { xData, yData } = chartData;

      const currency = getCurrencyFromFundName(fundName);
      const exchangeRate = exchangeRates[currency];

      const {
        shares,
        acquisitionValue,
        earliestBuyDate,
      } = getNumberOfSharesAndAcquisitionValue(
        fundName,
        portfolio,
        xData,
        yData,
        exchangeRate
      );

      earliestDatePerFund[fundName] = earliestBuyDate;

      const dayAgoValue = (yData[yData.length - 2] * shares) / exchangeRate;

      /*       const monthAgoValue =
          (getValueXMonthsAgo(1, chartData) * shares) / exchangeRate;
  
        const sixMonthsAgoValue =
          (getValueXMonthsAgo(6, chartData) * shares) / exchangeRate; */

      const yearAgoValue =
        (getValueXMonthsAgo(12, chartData) * shares) / exchangeRate;

      const threeYearsAgoValue =
        (getValueXMonthsAgo(36, chartData) * shares) / exchangeRate;

      const fiveYearsAgoValue =
        (getValueXMonthsAgo(60, chartData) * shares) / exchangeRate;

      const valueAtCurrentDate = yData[yData.length - 1];
      const currentValue = (shares * valueAtCurrentDate) / exchangeRate;

      changes[fundName] = {
        oneDC: dayAgoValue,
        /*         "1 month": monthAgoValue,
          "6 months": sixMonthsAgoValue, */
        oneYC: yearAgoValue,
        threeYC: threeYearsAgoValue,
        fiveYC: fiveYearsAgoValue,
        acqValue: acquisitionValue,
        value: currentValue,
      };

      tableData.push({
        fundName: [fundName],
        shares,
        value: currentValue.toFixed(2),
        acqValue: acquisitionValue.toFixed(2),
        ...data[fundName].tableData,
      });

      return [currentValue, acquisitionValue];
    })
    .reduce((curr, prev) => [curr[0] + prev[0], curr[1] + prev[1]]);

  const totalChanges = getTotalChanges(
    changeKeys,
    changes,
    currentTotalValue,
    acquisitionTotalValue
  );

  const [earliestFundName, earliestTotalBuyDate] = portfolioFundNames.reduce(
    (acc, nextFundName) => {
      const [fundName, buyDate] = acc;
      const nextBuyDate = earliestDatePerFund[nextFundName];

      if (nextBuyDate < buyDate) {
        return [nextFundName, nextBuyDate];
      }

      return [fundName, buyDate];
    },
    [portfolioFundNames[0], earliestDatePerFund[portfolioFundNames[0]]]
  );

  const xDataToSlice = data[earliestFundName].chartData.xData;

  const totalXData = xDataToSlice.slice(
    xDataToSlice.indexOf(earliestTotalBuyDate),
    xDataToSlice.length
  );

  const totalYData = totalXData.map((date) => {
    let totalNAV = 0;
    portfolioFundNames.forEach((fundName) => {
      if (earliestDatePerFund[fundName] <= date) {
        const { xData, yData } = data[fundName].chartData;
        const indexOfDate = xData.indexOf(date);
        totalNAV += yData[indexOfDate];
      }
    });
    return Math.round(totalNAV * 100) / 100;
  });

  return {
    tableData,
    currentTotalValue,
    acquisitionTotalValue,
    totalChanges,
    totalXData,
    totalYData,
  };
};

export default getTotalPortfolioValuesAndTableData;
