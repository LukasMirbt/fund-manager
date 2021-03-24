import axios from "axios";
import createInitialPortfolioState from "../../../redux/createInitialPortfolioState";
import { batch } from "react-redux";
import {
  setCredentials,
  setFundData,
  setIsSignInInvalid,
} from "../../../redux/general/actionCreators";
import { setInitialPortfolioState } from "../../../redux/portfolio/actionCreators";

const logIn = async ({ username, password, dispatch }) => {
  try {
    const {
      data: { token, initialPortfolioData },
    } = await axios.post("/api/", {
      username,
      password,
    });

    const initialPortfolioState = createInitialPortfolioState(
      initialPortfolioData
    );

    const {
      totalChanges,
      totalXData,
      totalYData,
    } = initialPortfolioData.portfolioData;

    batch(() => {
      dispatch(
        setCredentials({
          username,
          token,
        })
      );

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
              ...totalChanges,
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

export default logIn;
