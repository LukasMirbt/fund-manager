import React from "react";
import styled, { css } from "styled-components";
import TransactionHistory from "./TransactionHistory";
import { getInfoFundName } from "../../../redux/selectors";
import { useSelector } from "react-redux";
import Summary from "./Summary";
import TitleRow from "./TitleRow";
import Rating from "./Rating";

const Container = styled.section`
  padding: 1.5rem;
  border-left: ${({ theme }) => `1px solid ${theme.palette.divider}`};

  height: 40%;
  min-height: 300px;
  width: 100%;

  ${({ theme }) => css`
    @media screen and (min-width: ${`${theme.breakpoints.values["lg"]}px`}) {
      overflow-y: auto;
      min-height: unset;
    }
  `}
`;

const InfoRow = styled.div`
  display: flex;
`;

const Info = ({ portfolioTableDataByFundName }) => {
  const infoFundName = useSelector((state) => getInfoFundName(state));

  return infoFundName !== null ? (
    <Container aria-label={`Fund information about ${infoFundName}`}>
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
