import styled from "styled-components";
import sortPercentStrings from "../../common/sorting/sortPercentStrings";
import sortStrings from "../../common/sorting/sortStrings";
import sortMorningstarRatings from "../../common/sorting/sortMorningstarRatings";
import StarGroup from "../../common/components/StarGroup";

const FundnameCell = styled.div`
  line-height: normal;
  white-space: normal;
`;

const ChangeCell = styled.div`
  color: ${({ sc: { value } }) => {
    if (value.slice(0, -2) === "0.00") {
      return "blue";
    } else {
      return value[0] === "-" ? "red" : "green";
    }
  }};
`;

const renderFundnameCell = ({ value }) => <FundnameCell>{value}</FundnameCell>;

const renderChangeCell = ({ value }) => (
  <ChangeCell sc={{ value }}>{value}</ChangeCell>
);

const renderMorningstarRatingCell = ({ value }) => <StarGroup value={value} />;

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
    },
  ];
};

export default getColumns;
