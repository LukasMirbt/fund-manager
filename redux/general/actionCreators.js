import axios from "axios";
import { batch } from "react-redux";
import {
  SET_DATA,
  SET_INITIAL_GENERAL_STATE,
  SET_CREDENTIALS,
  SET_IS_STATE_INITIALIZED,
  SET_IS_TEMPORARY_DRAWER_OPEN,
  SET_IS_DRAWER_OPEN,
  SET_ARE_DATASETS_SHOWING,
  SET_IS_SNACKBAR_HIDDEN,
  SET_SNACKBAR_TEXT,
  SHOW_NOTIFICATION,
  SET_SNACKBAR_SEVERITY,
} from "./actionTypes";
import {
  setMainFundName,
  setIsChartDataLoading,
} from "../fundList/actionCreators";

export const setInitialGeneralState = (update) => ({
  type: SET_INITIAL_GENERAL_STATE,
  payload: update,
});

export const setData = (update) => ({
  type: SET_DATA,
  payload: update,
});

export const setCredentials = (update) => ({
  type: SET_CREDENTIALS,
  payload: update,
});

export const setIsStateInitialized = (update) => ({
  type: SET_IS_STATE_INITIALIZED,
  payload: update,
});

export const setIsTemporaryDrawerOpen = (update) => ({
  type: SET_IS_TEMPORARY_DRAWER_OPEN,
  payload: update,
});

export const setIsDrawerOpen = (update) => ({
  type: SET_IS_DRAWER_OPEN,
  payload: update,
});

export const setAreDatasetsShowing = (update) => ({
  type: SET_ARE_DATASETS_SHOWING,
  payload: update,
});

export const setIsSnackbarHidden = (update) => ({
  type: SET_IS_SNACKBAR_HIDDEN,
  payload: update,
});

export const setSnackbarText = (update) => ({
  type: SET_SNACKBAR_TEXT,
  payload: update,
});

export const setSnackbarSeverity = (update) => ({
  type: SET_SNACKBAR_SEVERITY,
  payload: update,
});

export const showNotification = (update) => ({
  type: SHOW_NOTIFICATION,
  payload: update,
});

export const getChartData = async (fundName) => {
  const replacedFundName = fundName.replace(/&amp;/g, "%26");
  const fundNameQuery = replacedFundName.split(" ").join("+");
  try {
    const chartData = (await axios.get(`/api/chartData/${fundNameQuery}`)).data;
    return chartData;
  } catch (e) {
    console.log(e);
  }
};

export const fundClick = (fundName) => async (dispatch, getState) => {
  const {
    general: { data },
  } = getState();

  dispatch(setIsChartDataLoading(true));
  const chartData = await getChartData(fundName);
  const newData = { ...data };

  console.log(chartData);

  newData[fundName].chartData = chartData;
  batch(() => {
    dispatch(setData(newData));
    dispatch(setMainFundName(fundName));
    dispatch(setIsChartDataLoading(false));
  });
};

export const checkFund = (fundName) => async (dispatch, getState) => {
  const {
    general: { data },
  } = getState();

  if (data[fundName].chartData !== undefined) {
    const newFundData = { ...data };
    newFundData[fundName].checked = !newFundData[fundName].checked;

    dispatch(setData(newFundData));
    return;
  }
  const chartData = await getChartData(fundName);
  const newData = { ...data };
  newData[fundName].chartData = chartData;
  newData[fundName].checked = true;

  dispatch(setData(newData));
};

/* export const initializeAppState = ({
  initialFundName,
  tableData,
  balance,
  chartData,
  exchangeRates,
  recommendedFunds,
  portfolio,
  token,
  username,
}) => (dispatch) => {
  const initialData = {};

  tableData.forEach((tableDataObj) => {
    initialData[tableDataObj.fundName] = {
      checked: false,
      color: undefined,
      tableData: {
        ...tableDataObj,
      },
      chartData: undefined,
    };
  });

  chartData.forEach((data) => {
    initialData[data.fundName].chartData = data;
  });

  const initialSortedTableData = getSortedTableData(
    tableData,
    "",
    initialSortParameters
  );

  let initialPortfolioData;
  let initialSortedPortfolioTableData;
  let portfolioFundName = "";

  if (Object.keys(portfolio).length !== 0) {
    initialPortfolioData = getTotalPortfolioValuesAndTableData(
      portfolio,
      exchangeRates,
      initialData
    );

    initialSortedPortfolioTableData = getSortedPortfolioTableData(
      initialPortfolioData.tableData,
      "",
      initialPortfolioSortParameters
    );

    portfolioFundName = initialSortedPortfolioTableData[0].fundName;
  }

  batch(() => {
    dispatch(
      setCredentials({
        token,
        username,
      })
    );

    dispatch(
      setInitialGeneralState({
        data: initialData,
      })
    );

    dispatch(
      setInitialFundListState({
        mainFundName: initialFundName,
        tableData: initialSortedTableData,
      })
    );

    dispatch(
      setInitialRecommendedFundsState({
        recommendedFunds,
        recommendedFundName: Object.keys(recommendedFunds)[0],
      })
    );

    dispatch(
      setInitialPortfolioState({
        balance,
        exchangeRates,
        portfolio,
        initialPortfolioData: {
          ...initialPortfolioData,
          tableData: initialSortedPortfolioTableData,
        },
        portfolioFundName,
      })
    );

    dispatch(setIsStateInitialized(true));
  });
};
 */
