import axios from "axios";
import createInitialPortfolioState from "../../../redux/createInitialPortfolioState";
import { batch } from "react-redux";
import {
  setCredentials,
  setData,
  setFundData,
} from "../../../redux/general/actionCreators";
import { setInitialPortfolioState } from "../../../redux/portfolio/actionCreators";
import getTotalPortfolioData from "../../Portfolio/getTotalPortfolioData";

const signInWithToken = (token) => async (dispatch, getState) => {
  const {
    general: { data, exchangeRates },
  } = getState();

  try {
    const {
      data: { userData, portfolioChartData },
    } = await axios.post(
      "/api/signInWithToken",
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const { portfolio } = userData;

    const initialPortfolioState = createInitialPortfolioState(userData);

    const newData = { ...data };

    portfolioChartData.forEach((chartData) => {
      newData[chartData._id].chartData = chartData;
    });

    const totalPortfolioData = getTotalPortfolioData({
      portfolio,
      portfolioChartData,
      exchangeRates,
    });

    batch(() => {
      dispatch(
        setCredentials({
          username: userData.username,
          token: userData.token,
        })
      );

      dispatch(setData(newData));

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

      dispatch(setInitialPortfolioState(initialPortfolioState));
    });
  } catch (e) {
    window.localStorage.removeItem("token");
    dispatch(setCredentials({}));
  }
};

export default signInWithToken;
