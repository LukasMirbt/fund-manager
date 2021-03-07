import React from "react";
import styled from "styled-components";
import Star from "@material-ui/icons/Star";
import StarBorder from "@material-ui/icons/StarBorder";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const StyledStar = styled(Star)`
  font-size: 1rem;
`;

const StyledStarBorder = styled(StarBorder)`
  font-size: 1rem;
`;

const StarGroup = ({ numberOfStars }) => {
  return (
    <Container>
      {[...new Array(numberOfStars).keys()].map((n) => (
        <StyledStar key={n} />
      ))}
      {[...new Array(5 - numberOfStars).keys()].map((n) => (
        <StyledStarBorder key={n} />
      ))}
    </Container>
  );
};

export default StarGroup;
