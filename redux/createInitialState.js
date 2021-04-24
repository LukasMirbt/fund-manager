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
      exchangeRates,
      data: initialData,

      isTemporaryDrawerOpen: false,
      initialOpenDrawerTabIndex: null,

      fundNamesCurrentlyBeingLoaded: [],

      alertSettings: {
        isOpen: false,
        text: "",
        severity: "success",
      },
    },
    fundList: {
      fundNames: [initialFundName],
      tableData,
      isFundListShowing: true,
    },
    chart: {
      selectedTimespan: "max",
      dateParameters: {
        start: null,
        end: null,
      },

      isDataInPercent: true,
      isDataDownsampled: true,

      isChartShowing: true,
      isChartShowingForSmallScreens: false,

      arePatternsShowing: true,
      patterns: [
        ["dash", "#006400"],
        ["line-vertical", "#8B0000"],
        ["diagonal-right-left", "#000080"],
        ["zigzag", "#483D8B"],
        ["diagonal", "#4B0082"],
        ["weave", "#8B4513"],
        ["plus", "#524259"],
        ["cross", "#495219"],
        ["line", "#065535"],
        ["diamond", "#0b3d91"],
        ["diamond-box", "#c71585"],
        ["triangle", "#7f6b9e"],
      ],
    },
    login: {
      credentials: {},
      signInUsernameInputValue: "",
      signInPasswordInputValue: "",

      signInUsernameErrorMessage: null,
      signInPasswordErrorMessage: null,

      signUpUsernameInputValue: "",
      signUpPasswordInputValue: "",

      signUpUsernameErrorMessage: null,
      signUpPasswordErrorMessage: null,

      isSignUpShowing: false,
      isUserRemembered: false,
    },
    fundAdvisor: {
      recommendedFunds,
    },
  };

  return {
    props: {
      initialReduxState,
    },
  };
};

export default createInitialState;
