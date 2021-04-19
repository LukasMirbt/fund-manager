import styled from "styled-components";

const StyledCell = styled.div`
  line-height: normal;
  white-space: normal;
`;

const FundnameCell = ({ value }) => <StyledCell>{value}</StyledCell>;

export default FundnameCell;
