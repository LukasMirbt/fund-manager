import styled from "styled-components";

const FundnameCell = styled.div`
  line-height: normal;
  white-space: normal;
`;

const TotalCell = styled(FundnameCell)`
  font-weight: bold;
`;

const renderPortfolioFundnameCell = ({ value, row }) => {
  if (row.id === "Total") {
    return <TotalCell>{value}</TotalCell>;
  }

  return <FundnameCell>{value}</FundnameCell>;
};

export default renderPortfolioFundnameCell;
