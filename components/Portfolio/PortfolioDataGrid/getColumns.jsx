import styled from "styled-components";
import sortPercentStrings from "../../common/sorting/sortPercentStrings";
import sortStrings from "../../common/sorting/sortStrings";

const FundnameCell = styled.div`
  line-height: normal;
  white-space: normal;
`;

const TotalCell = styled(FundnameCell)`
  font-weight: bold;
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

const renderFundnameCell = ({ value, row }) => {
  if (row.id === "Total") {
    return <TotalCell>{value}</TotalCell>;
  }

  return <FundnameCell>{value}</FundnameCell>;
};

const renderChangeCell = ({ value }) => {
  return <ChangeCell sc={{ value }}>{value}</ChangeCell>;
};

const getColumns = () => {
  return [
    {
      field: "col1",
      headerName: "Fundname",
      flex: 1,
      sortComparator: sortStrings,
      renderCell: renderFundnameCell,
    },
    {
      field: "col2",
      headerName: "Shares",
      flex: 0.4,
    },
    {
      field: "col3",
      headerName: "Acquisition value",
      flex: 0.6,
    },
    {
      field: "col4",
      headerName: "Current value",
      flex: 0.6,
    },
    {
      field: "col5",
      headerName: "1-day change",
      flex: 0.6,
      sortComparator: sortPercentStrings,
      renderCell: renderChangeCell,
    },
    {
      field: "col6",
      headerName: "1-year change",
      flex: 0.6,
      sortComparator: sortPercentStrings,
      renderCell: renderChangeCell,
    },
  ];
};

export default getColumns;
