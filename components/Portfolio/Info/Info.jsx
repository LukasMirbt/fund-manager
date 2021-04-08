import React from "react";
import styled from "styled-components";
import TransactionHistory from "./TransactionHistory";
import { getInfoFundName } from "../../../redux/selectors";
import { useSelector } from "react-redux";
import Summary from "./Summary";
import TitleRow from "./TitleRow";
import Rating from "./Rating";

const Container = styled.div`
  padding: 1.5rem;
  border-left: ${({ theme }) => `1px solid ${theme.palette.divider}`};

  height: 40%;
  min-height: 300px;
  width: 100%;
`;

const InfoRow = styled.div`
  display: flex;
`;

const Info = ({ portfolioTableDataByFundName }) => {
  const infoFundName = useSelector((state) => getInfoFundName(state));

  return infoFundName !== null ? (
    <Container>
      <TitleRow />

      <InfoRow>
        <Summary
          portfolioTableDataByFundName={portfolioTableDataByFundName}
          fundName={infoFundName}
        />

        <TransactionHistory fundName={infoFundName} />

        <Rating
          portfolioTableDataByFundName={portfolioTableDataByFundName}
          fundName={infoFundName}
        />
      </InfoRow>
    </Container>
  ) : null;
};

export default Info;
