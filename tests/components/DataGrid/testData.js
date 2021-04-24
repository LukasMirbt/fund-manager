import getColumns from "../../../components/Portfolio/PortfolioDataGrid/getColumns";
import { getPortfolioFundNames } from "../../../redux/selectors";
import { setPortfolioFundNames } from "../../../redux/portfolio/actionCreators";

export const rows = [
  {
    id: "test",
    col0: "test",
    col1: "test",
    col2: "5",
    col3: "55 %",
    col4: "100 %",
    col5: "150 %",
    col6: "200 %",
    col7: "2019-04-13",
  },
];

export const columns = getColumns({
  getFundNames: getPortfolioFundNames,
  setFundNames: setPortfolioFundNames,
});
