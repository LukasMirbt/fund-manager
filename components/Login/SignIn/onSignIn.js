import axios from "axios";
import createInitialPortfolioState from "../../../redux/createInitialPortfolioState";
import { batch } from "react-redux";
import {
  setCredentials,
  setData,
  setFundData,
  setSignInPasswordErrorMessage,
  setSignInUsernameErrorMessage,
} from "../../../redux/general/actionCreators";
import { setInitialPortfolioState } from "../../../redux/portfolio/actionCreators";
import getTotalPortfolioData from "../../Portfolio/getTotalPortfolioData";

const onSignIn = () => async (dispatch, getState) => {
  const {
    general: {
      data,
      exchangeRates,
      signInUsernameInputValue: username,
      signInPasswordInputValue: password,
      isUserRemembered,
    },
  } = getState();

  try {
    const {
      data: { userData, portfolioChartData },
    } = await axios.post("/api/", {
      username,
      password,
    });

    if (isUserRemembered === true) {
      try {
        window.localStorage.setItem("token", userData.token);
      } catch (e) {
        console.log(e);
      }
    } else {
      window.localStorage.removeItem("token");
    }

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
          username,
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
  } catch ({ response }) {
    const { usernameError, passwordError } = response.data;

    batch(() => {
      dispatch(setSignInUsernameErrorMessage(usernameError));
      dispatch(setSignInPasswordErrorMessage(passwordError));
    });
  }
};

export default onSignIn;
