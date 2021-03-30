import axios from "axios";
import { batch } from "react-redux";
import getTotalPortfolioData from "../../components/Portfolio/getTotalPortfolioData";
import { setFundData, showNotification } from "../general/actionCreators";
import { setBalance, setPortfolio } from "./actionCreators";

export const sellFund = ({ fundName, numberOfShares }) => async (
  dispatch,
  getState
) => {
  const {
    general: { data, exchangeRates, credentials },
  } = getState();

  try {
    const {
      data: { updatedPortfolio },
    } = await axios.post(
      "/api/portfolio/sellFund",
      {
        fundName,
        numberOfShares,
      },
      {
        headers: {
          Authorization: `Bearer ${credentials.token}`,
        },
      }
    );

    const portfolioChartData = Object.keys(updatedPortfolio).map(
      (fundName) => data[fundName].chartData
    );

    const {
      totalXData,
      totalYData,
      totalAcquisitionValue,
      totalValue,
    } = getTotalPortfolioData({
      portfolio: updatedPortfolio,
      portfolioChartData,
      exchangeRates,
    });

    batch(() => {
      dispatch(setPortfolio(updatedPortfolio));

      dispatch(setBalance(updatedPortfolio.balance));

      dispatch(
        setFundData({
          fundName: "Total",
          fundData: {
            chartData: {
              xData: totalXData,
              yData: totalYData,
            },
            tableData: {
              fundName: "Total",
              acqValue: totalAcquisitionValue,
              value: totalValue,
            },
          },
        })
      );

      dispatch(
        showNotification({
          text: `Sold ${numberOfShares} ${
            numberOfShares > 1 ? "shares" : "share"
          } of ${fundName}`,
          severity: "success",
        })
      );
    });
  } catch (e) {
    console.log(e);
  }
};

export default sellFund;
