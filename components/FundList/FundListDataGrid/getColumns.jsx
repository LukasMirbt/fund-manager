import sortPercentStrings from "../../common/sorting/sortPercentStrings";
import sortStrings from "../../common/sorting/sortStrings";
import sortMorningstarRatings from "../../common/sorting/sortMorningstarRatings";
import ChangeCell from "../../DataGrid/Cells/ChangeCell";
import FundnameCell from "../../DataGrid/Cells/FundnameCell";
import MorningstarRatingCell from "../../DataGrid/Cells/MorningstarRatingCell";
import getCheckboxColumn from "../../DataGrid/getCheckboxColumn";

const getColumns = ({
  morningstarRatingSortOrderRef,
  getFundNames,
  setFundNames,
}) => {
  return [
    getCheckboxColumn({ getFundNames, setFundNames }),
    {
      field: "col1",
      headerName: "Fundname",
      width: 250,
      sortComparator: sortStrings,
      renderCell: FundnameCell,
    },
    {
      field: "col2",
      headerName: "Morningstar rating",
      width: 150,
      sortComparator: (a, b) =>
        sortMorningstarRatings(a, b, morningstarRatingSortOrderRef),
      renderCell: MorningstarRatingCell,
    },
    {
      field: "col3",
      headerName: "1-day change",
      width: 150,
      sortComparator: sortPercentStrings,
      renderCell: ChangeCell,
      hide: true,
      type: "number",
    },
    {
      field: "col4",
      headerName: "1-year change",
      width: 150,
      sortComparator: sortPercentStrings,
      renderCell: ChangeCell,
      type: "number",
    },
    {
      field: "col5",
      headerName: "3-year change",
      width: 150,
      sortComparator: sortPercentStrings,
      renderCell: ChangeCell,
      type: "number",
    },
    {
      field: "col6",
      headerName: "5-year change",
      width: 150,
      sortComparator: sortPercentStrings,
      renderCell: ChangeCell,
      type: "number",
    },
    {
      field: "col7",
      headerName: "Last updated",
      width: 150,
      hide: true,
      type: "date",
    },
  ];
};

export default getColumns;
