import sortPercentStrings from "../../common/sorting/sortPercentStrings";
import sortStrings from "../../common/sorting/sortStrings";
import renderChangeCell from "../../DataGrid/renderChangeCell";
import renderPortfolioFundnameCell from "./renderPortfolioFundnameCell";

const columns = [
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
  },
  {
    field: "col3",
    headerName: "Acquisition value",
    width: 150,
  },
  {
    field: "col4",
    headerName: "Current value",
    width: 150,
  },
  {
    field: "col5",
    headerName: "Total change",
    width: 150,
    renderCell: renderChangeCell,
  },
  {
    field: "col6",
    headerName: "1-day change",
    width: 150,
    sortComparator: sortPercentStrings,
    renderCell: renderChangeCell,
    hide: true,
  },
  {
    field: "col7",
    headerName: "1-year change",
    width: 150,
    sortComparator: sortPercentStrings,
    renderCell: renderChangeCell,
    hide: true,
  },
];

export default columns;
