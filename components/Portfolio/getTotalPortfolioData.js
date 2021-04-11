import adjustValueByCurrency from "../DrawerTabs/PortfolioTabs/adjustValueByCurrency";
import round from "../common/utils/round";
import { NUMBER_OF_DECIMALS } from "../common/constants";
import getFundAcquisitionValue from "./getFundAquisitionValue";

const getTotalPortfolioData = ({
  portfolio,
  portfolioChartData,
  exchangeRates,
}) => {
  if (Object.keys(portfolio).length === 0) {
    return null;
  }

  let totalXData;
  const earliestDateByFundName = {};
  const exchangeRateByFundName = {};

  portfolioChartData.forEach(({ _id: fundName, xData }) => {
    const earliestDate = xData[0];
    earliestDateByFundName[fundName] = earliestDate;

    if (totalXData === undefined) {
      totalXData = xData;
    } else if (earliestDate < totalXData[0]) {
      totalXData = xData;
    }

    exchangeRateByFundName[fundName] = adjustValueByCurrency({
      value: 1,
      fundName,
      exchangeRates,
    });
  });

  const startIndexByFundName = {};

  const totalYData = totalXData.map((date, index) => {
    let totalNAV = 0;

    portfolioChartData.forEach(({ _id: fundName, yData }) => {
      if (earliestDateByFundName[fundName] <= date) {
        if (startIndexByFundName[fundName] === undefined) {
          startIndexByFundName[fundName] = index;
        }

        let value = yData[index - startIndexByFundName[fundName]];
        value *= exchangeRateByFundName[fundName];
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

  portfolioChartData.forEach(({ _id: fundName, yData }) => {
    const { shares } = portfolio[fundName];

    const value = adjustValueByCurrency({
      value: shares * yData[yData.length - 1],
      fundName,
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
