const axios = {
  get: (path) => {
    if (path.includes("/api/chartData/")) {
      return Promise.resolve({ data: "loadedChartData" });
    }
  },
};

export default axios;
