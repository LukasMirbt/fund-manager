import React from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";

const Rating = styled.div`
  padding-right: 0.5rem;
`;

const RatingTitle = styled(Typography)`
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 33%;
`;

const Paragraph = styled(Typography)`
  margin-bottom: 0.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const Summary = ({ portfolioTableDataByFundName, fundName }) => {
  const { acqValue, value, totalChange, shares } = portfolioTableDataByFundName[
    fundName
  ];

  return (
    <Container>
      <Rating>
        <RatingTitle variant="h6" component="h3">
          Summary
        </RatingTitle>

        <Paragraph variant="body1">{`You own a total of ${shares} shares of ${fundName} which you acquired at a cost of ${acqValue} SEK`}</Paragraph>

        <Paragraph variant="body1">
          {`They are currently worth ${value} SEK, which is a${
            totalChange[0] === "-" ? " decrease" : "n increase"
          } in value of ${totalChange}`}
        </Paragraph>
      </Rating>
    </Container>
  );
};

export default Summary;
