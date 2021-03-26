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
    exchangeRates,
  } = await InitialData.findOne({});

  const initialData = tableData.reduce((acc, data) => {
    acc[data.fundName] = {
      tableData: data,
    };

    return acc;
  }, {});

  recommendedChartData.forEach((chartData) => {
    initialData[chartData._id].chartData = chartData;
  });

  initialData[initialFundName].chartData = initialFundChartData;

  const initialReduxState = {
    general: {
      data: initialData,
      credentials: {},
      signInUsernameInputValue: "",
      signInPasswordInputValue: "",
      isSignInInvalid: false,

      signUpUsernameInputValue: "",
      signUpPasswordInputValue: "",
      isSignUpInvalid: false,

      selectedTimespan: "max",
      dateParameters: {
        start: null,
        end: null,
      },
      isDataInPercent: true,
      isDataDownsampled: true,
      isChartShowing: true,
      fundNamesCurrentlyBeingLoaded: [],

      exchangeRates,

      isDrawerOpen: true,
      isTemporaryDrawerOpen: false,
      initialOpenDrawerTabIndex: null,
      isSnackbarHidden: true,
      areDatasetsShowing: true,
      patterns: [
        ["dash", "#1f77b4"],
        ["line-vertical", "#ff7f0e"],
        ["diagonal-right-left", "#2ca02c"],
        ["zigzag", "#17becf"],
        ["diagonal", "#6766ff"],
        ["weave", "#0b3d91"],
      ],
      /*       colors: [
        "#000000",
        "#ec8381",
        "#524259",
        "#ff7213",
        "#495219",
        "#065535",
        "#0b3d91",
        "#c71585",
        "#6766ff",
        "#7f6b9e",
        "#9e7f6b",
        "#808000",
        "#daa520",
        "#cd5c5c"
      ], */
    },
    fundList: {
      fundNames: [initialFundName],
      tableData,
      isFundListShowing: true,
    },
    recommendedFunds: {
      recommendedFunds,
      tabValue: 0,
      isIntroShowing: true,
    },
  };

  return {
    props: {
      initialReduxState,
    },
  };
};

export default createInitialState;
