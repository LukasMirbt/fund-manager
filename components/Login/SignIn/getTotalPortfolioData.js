import adjustValueByCurrency from "../../DrawerTabs/PortfolioTabs/adjustValueByCurrency";

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
    return Math.round(totalNAV * 100) / 100;
  });

  let totalAcquisitionValue = 0;

  Object.keys(portfolio).forEach((fundName) => {
    const { buyHistory } = portfolio[fundName];

    buyHistory.forEach(({ acquisitionValue }) => {
      totalAcquisitionValue += acquisitionValue;
    });
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
    totalAcquisitionValue,
    totalValue,
  };
};

export default getTotalPortfolioData;
