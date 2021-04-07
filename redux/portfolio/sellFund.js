import axios from "axios";
import { batch } from "react-redux";
import getTotalPortfolioData from "../../components/Portfolio/getTotalPortfolioData";
import {
  setData,
  setFundData,
  showNotification,
} from "../general/actionCreators";
import {
  setBalance,
  setInfoFundName,
  setPortfolio,
  setPortfolioFundNames,
} from "./actionCreators";

export const sellFund = ({ fundName, numberOfShares }) => async (
  dispatch,
  getState
) => {
  const {
    general: { data, exchangeRates, credentials },
    portfolio: { infoFundName },
  } = getState();

  try {
    const {
      data: { updatedPortfolio, updatedBalance },
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

    const totalPortfolioData = getTotalPortfolioData({
      portfolio: updatedPortfolio,
      portfolioChartData,
      exchangeRates,
    });

    const fundNames = Object.keys(updatedPortfolio);

    const isPortfolioEmpty = fundNames.length === 0;

    batch(() => {
      if (
        fundName === infoFundName &&
        updatedPortfolio[fundName] === undefined
      ) {
        if (isPortfolioEmpty === false) {
          dispatch(setInfoFundName(fundNames[0]));
        } else {
          dispatch(setInfoFundName(null));
        }
      }

      if (isPortfolioEmpty === true) {
        const newData = { ...data };
        delete newData["Total"];
        dispatch(setData(newData));
        dispatch(setPortfolioFundNames([]));
      }

      dispatch(setPortfolio(updatedPortfolio));

      dispatch(setBalance(updatedBalance));

      if (totalPortfolioData !== null) {
        dispatch(
          setFundData({
            fundName: "Total",
            fundData: {
              chartData: {
                xData: totalPortfolioData.totalXData,
                yData: totalPortfolioData.totalYData,
              },
              tableData: {
                fundName: "Total",
                acqValue: totalPortfolioData.totalAcquisitionValue,
                value: totalPortfolioData.totalValue,
              },
            },
          })
        );
      }

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
