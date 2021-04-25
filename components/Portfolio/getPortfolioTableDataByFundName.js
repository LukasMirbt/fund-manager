import getFundAcquisitionValue from "./getFundAquisitionValue";
import adjustValueByCurrency from "../Drawer/DrawerTabs/PortfolioTabs/adjustValueByCurrency";

const getPortfolioTableDataByFundName = ({
  data,
  portfolio,
  exchangeRates,
}) => {
  const tableData = Object.keys(portfolio).map(
    (fundName) => data[fundName].tableData
  );

  const portfolioTableDataByFundName = {};

  tableData.forEach(
    ({
      fundName,
      oneDC,
      oneYC,
      threeYC,
      fiveYC,
      ISIN,
      recommendation,
      morningstarRating,
      mostRecentDate,
    }) => {
      const { shares } = portfolio[fundName];
      const { yData } = data[fundName].chartData;

      const fundAcqValue = getFundAcquisitionValue(portfolio[fundName]).toFixed(
        2
      );

      const value = adjustValueByCurrency({
        value: shares * yData[yData.length - 1],
        fundName,
        exchangeRates,
      }).toFixed(2);

      const totalFundChange = `${((value / fundAcqValue) * 100 - 100).toFixed(
        2
      )} %`;

      portfolioTableDataByFundName[fundName] = {
        acqValue: fundAcqValue,
        value: value,
        totalChange: totalFundChange,
        shares,
        oneDC,
        oneYC,
        threeYC,
        fiveYC,
        ISIN,
        recommendation,
        morningstarRating,
        mostRecentDate,
      };
    }
  );

  const { acqValue: totalAcqValue, value: totalValue } = data[
    "Total"
  ].tableData;

  const totalChange = `${((totalValue / totalAcqValue) * 100 - 100).toFixed(
    2
  )} %`;

  portfolioTableDataByFundName["Total"] = {
    acqValue: totalAcqValue.toFixed(2),
    value: totalValue.toFixed(2),
    totalChange,
    shares: "-",
    oneDC: "-",
    oneYC: "-",
    threeYC: "-",
    fiveYC: "-",
    ISIN: "-",
    recommendation: "-",
    morningstarRating: "-",
    mostRecentDate: "-",
  };

  return portfolioTableDataByFundName;
};

export default getPortfolioTableDataByFundName;
