import axios from "axios";
import createInitialPortfolioState from "../../../redux/createInitialPortfolioState";
import { batch } from "react-redux";
import {
  setCredentials,
  setData,
  setFundData,
  setIsSignInInvalid,
} from "../../../redux/general/actionCreators";
import { setInitialPortfolioState } from "../../../redux/portfolio/actionCreators";
import getTotalPortfolioData from "./getTotalPortfolioData";

const onSignIn = async ({
  username,
  password,
  data,
  exchangeRates,
  dispatch,
}) => {
  try {
    const {
      data: { userData, portfolioChartData },
    } = await axios.post("/api/", {
      username,
      password,
    });

    const { portfolio } = userData;

    const initialPortfolioState = createInitialPortfolioState(userData);

    const newData = { ...data };

    portfolioChartData.forEach((chartData) => {
      newData[chartData._id].chartData = chartData;
    });

    const {
      totalXData,
      totalYData,
      totalAcquisitionValue,
      totalValue,
    } = getTotalPortfolioData({
      portfolio,
      portfolioChartData,
      exchangeRates,
    });

    batch(() => {
      dispatch(
        setCredentials({
          username,
          token: userData.token,
        })
      );

      dispatch(setData(newData));

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

      dispatch(setInitialPortfolioState(initialPortfolioState));
    });
  } catch (e) {
    dispatch(setIsSignInInvalid(true));
  }
};

export default onSignIn;
