import axios from "axios";
import { batch } from "react-redux";
import getTotalPortfolioData from "../../components/Portfolio/getTotalPortfolioData";
import {
  setData,
  setFundData,
  setAlertSettings,
} from "../general/actionCreators";
import {
  setBalance,
  setInfoFundName,
  setPortfolio,
  setPortfolioFundNames,
} from "./actionCreators";

export const buyFund = ({ fundName, numberOfShares }) => async (
  dispatch,
  getState
) => {
  const {
    general: { data, exchangeRates, credentials },
    portfolio: { portfolioFundNames },
  } = getState();

  try {
    const {
      data: { updatedPortfolio, updatedBalance, fundData },
    } = await axios.post(
      "/api/portfolio/buyFund",
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

    const newData = { ...data };
    newData[fundName].chartData = fundData;

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

      dispatch(setBalance(updatedBalance));

      dispatch(setData(newData));

      dispatch(setInfoFundName(fundName));

      if (portfolioFundNames.length === 0) {
        dispatch(setPortfolioFundNames(["Total"]));
      }

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
        setAlertSettings({
          isOpen: true,
          text: `Bought ${numberOfShares} ${
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

export default buyFund;
