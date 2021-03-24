import sortPercentStrings from "../../common/sorting/sortPercentStrings";
import sortStrings from "../../common/sorting/sortStrings";
import sortMorningstarRatings from "../../common/sorting/sortMorningstarRatings";
import renderChangeCell from "../../DataGrid/renderChangeCell";
import renderFundnameCell from "../../DataGrid/renderFundnameCell";
import renderMorningstarRatingCell from "../../DataGrid/renderMorningstarRatingCell";

const getColumns = (morningstarRatingSortOrderRef) => {
  return [
    {
      field: "col1",
      headerName: "Fundname",
      width: 250,
      sortComparator: sortStrings,
      renderCell: renderFundnameCell,
    },
    {
      field: "col2",
      headerName: "Morningstar rating",
      width: 150,
      sortComparator: (a, b) =>
        sortMorningstarRatings(a, b, morningstarRatingSortOrderRef),
      renderCell: renderMorningstarRatingCell,
    },
    {
      field: "col3",
      headerName: "1-day change",
      width: 150,
      sortComparator: sortPercentStrings,
      renderCell: renderChangeCell,
      hide: true,
    },
    {
      field: "col4",
      headerName: "1-year change",
      width: 150,
      sortComparator: sortPercentStrings,
      renderCell: renderChangeCell,
    },
    {
      field: "col5",
      headerName: "3-year change",
      width: 150,
      sortComparator: sortPercentStrings,
      renderCell: renderChangeCell,
    },
    {
      field: "col6",
      headerName: "5-year change",
      width: 150,
      sortComparator: sortPercentStrings,
      renderCell: renderChangeCell,
    },
    {
      field: "col7",
      headerName: "Last updated",
      width: 150,
      hide: true,
    },
  ];
};

export default getColumns;
