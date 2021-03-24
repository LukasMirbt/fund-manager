import styled from "styled-components";

const FundnameCell = styled.div`
  line-height: normal;
  white-space: normal;
`;

const renderFundnameCell = ({ value }) => <FundnameCell>{value}</FundnameCell>;

export default renderFundnameCell;
