import dbConnect from "../utils/dbConnect";
import InitialData from "../models/InitialData";

const createInitialState = async () => {
  await dbConnect();

  const {
    initialFundName,
    initialFundChartData,
    tableData,
    recommendedChartData,
    recommendedFunds,
  } = await InitialData.findOne({});

  const initialData = tableData.reduce((acc, data) => {
    acc[data.fundName] = {
      checked: false,
      tableData: data,
    };

    return acc;
  }, {});

  recommendedChartData.forEach((data) => {
    initialData[data._id].chartData = data;
  });

  initialData[initialFundName].chartData = initialFundChartData;

  const initialReduxState = {
    general: {
      data: initialData,
      credentials: {},
      isDrawerOpen: true,
      isTemporaryDrawerOpen: false,
      isSnackbarHidden: true,
      areDatasetsShowing: true,
    },
    fundList: {
      mainFundName: initialFundName,
      tableData,
      isChartDataLoading: false,
      sortParameters: { direction: "asc", key: "fundName" },
      dateParameters: {},
      searchTerm: "",
      isDataInPercent: true,
      isDataDownsampled: true,
      isTableHidden: false,
      hiddenFunds: [],
    },
    recommendedFunds: {
      recommendedFunds,
      recommendedFundName: recommendedFunds[0][0],
      recommendedTabValue: 0,
      recommendedDateParameters: {},
      isRecommendedIntroShowing: true,
    },
  };

  return {
    props: {
      initialReduxState,
    },
  };
};

export default createInitialState;
