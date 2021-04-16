import sortPercentStrings from "../../common/sorting/sortPercentStrings";
import sortStrings from "../../common/sorting/sortStrings";
import renderChangeCell from "../../DataGrid/renderChangeCell";
import renderPortfolioFundnameCell from "./renderPortfolioFundnameCell";
import getCheckboxColumn from "../../DataGrid/getCheckboxColumn";

const getColumns = ({ getFundNames, setFundNames }) => [
  getCheckboxColumn({ getFundNames, setFundNames }),
  {
    field: "col1",
    headerName: "Fundname",
    width: 250,
    sortComparator: sortStrings,
    renderCell: renderPortfolioFundnameCell,
  },
  {
    field: "col2",
    headerName: "Shares",
    width: 150,
    type: "number",
  },
  {
    field: "col3",
    headerName: "Acquisition value (SEK)",
    width: 150,
    type: "number",
  },
  {
    field: "col4",
    headerName: "Current value (SEK)",
    width: 150,
    type: "number",
  },
  {
    field: "col5",
    headerName: "Total change",
    width: 150,
    sortComparator: sortPercentStrings,
    renderCell: renderChangeCell,
    type: "number",
  },
  {
    field: "col6",
    headerName: "1-day change",
    width: 150,
    sortComparator: sortPercentStrings,
    renderCell: renderChangeCell,
    hide: true,
    type: "number",
  },
  {
    field: "col7",
    headerName: "1-year change",
    width: 150,
    sortComparator: sortPercentStrings,
    renderCell: renderChangeCell,
    hide: true,
    type: "number",
  },
];

export default getColumns;
