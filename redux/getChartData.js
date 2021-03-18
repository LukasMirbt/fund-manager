import axios from "axios";

const getChartData = async (fundName) => {
  const replacedFundName = fundName.replace(/&amp;/g, "%26");
  const fundNameQuery = replacedFundName.split(" ").join("+");
  try {
    const chartData = (await axios.get(`/api/chartData/${fundNameQuery}`)).data;
    return chartData;
  } catch (e) {
    console.log(e);
  }
};

export default getChartData;
