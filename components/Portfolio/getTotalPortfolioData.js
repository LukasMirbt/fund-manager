import adjustValueByCurrency from "../DrawerTabs/PortfolioTabs/adjustValueByCurrency";
import round from "../common/utils/round";
import { NUMBER_OF_DECIMALS } from "../common/constants";
import getFundAcquisitionValue from "./getFundAquisitionValue";

const getTotalPortfolioData = ({
  portfolio,
  portfolioChartData,
  exchangeRates,
}) => {
  let totalXData;
  const earliestDateByFundName = {};

  portfolioChartData.forEach(({ _id, xData }) => {
    const earliestDate = xData[0];
    earliestDateByFundName[_id] = earliestDate;

    if (totalXData === undefined) {
      totalXData = xData;
    } else if (earliestDate < totalXData[0]) {
      totalXData = xData;
    }
  });

  const exchangeRateByFundName = {};

  portfolioChartData.forEach(({ _id }) => {
    if (_id.includes("USD") === true) {
      exchangeRateByFundName[_id] = exchangeRates["USD"];
    } else if (_id.includes("EUR") === true) {
      exchangeRateByFundName[_id] = exchangeRates["EUR"];
    } else {
      exchangeRateByFundName[_id] = 1;
    }
  });

  const startIndexByFundName = {};

  const totalYData = totalXData.map((date, index) => {
    let totalNAV = 0;

    portfolioChartData.forEach(({ _id, yData }) => {
      if (earliestDateByFundName[_id] <= date) {
        if (startIndexByFundName[_id] === undefined) {
          startIndexByFundName[_id] = index;
        }

        let value = yData[index - startIndexByFundName[_id]];
        value *= exchangeRateByFundName[_id];
        totalNAV += value;
      }
    });
    return round({ value: totalNAV, numberOfDecimals: 2 });
  });

  let totalAcquisitionValue = 0;

  Object.keys(portfolio).forEach((fundName) => {
    const totalFundAcquisitionValue = getFundAcquisitionValue(
      portfolio[fundName]
    );

    totalAcquisitionValue += totalFundAcquisitionValue;
  });

  let totalValue = 0;

  portfolioChartData.forEach(({ _id, yData }) => {
    const { shares } = portfolio[_id];

    const value = adjustValueByCurrency({
      fundName: _id,
      value: shares * yData[yData.length - 1],
      exchangeRates,
    });

    totalValue += value;
  });

  return {
    totalXData,
    totalYData,
    totalAcquisitionValue: round({
      value: totalAcquisitionValue,
      numberOfDecimals: NUMBER_OF_DECIMALS,
    }),
    totalValue: round({
      value: totalValue,
      numberOfDecimals: NUMBER_OF_DECIMALS,
    }),
  };
};

export default getTotalPortfolioData;
