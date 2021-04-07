import React from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import StarGroup from "../../common/components/StarGroup";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 33%;
`;

const Title = styled(Typography)`
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

const StarContainer = styled.div`
  display: flex;
`;

const Column = styled.div`
  padding-right: 1rem;
  margin-bottom: 1rem;
`;

const Recommendation = styled(Typography)``;

const Rating = ({ portfolioTableDataByFundName, fundName }) => {
  const { recommendation, morningstarRating } = portfolioTableDataByFundName[
    fundName
  ];

  return (
    <Container>
      <Column>
        <Title variant="h6" component="h3">
          Morningstar rating
        </Title>
        <StarContainer>
          {morningstarRating !== "-" ? (
            <StarGroup value={morningstarRating} />
          ) : (
            "No Morningstar rating available"
          )}
        </StarContainer>
      </Column>

      <Column>
        <Title variant="h6" component="h3">
          Recommendation
        </Title>
        <Recommendation variant="subtitle1">
          {recommendation ?? "No recommendation available"}
        </Recommendation>
      </Column>
    </Container>
  );
};

export default Rating;
