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

const StarGroup = ({ value }) => {
  if (value === "-") {
    return (
      <span role="img" aria-label="No rating">
        {"-"}
      </span>
    );
  } else {
    const numberOfStars = Number(value);

    return (
      <Container role="img" aria-label={`${numberOfStars} stars`}>
        {[...new Array(numberOfStars).keys()].map((n) => (
          <StyledStar key={n} />
        ))}
        {[...new Array(5 - numberOfStars).keys()].map((n) => (
          <StyledStarBorder key={n} />
        ))}
      </Container>
    );
  }
};

export default StarGroup;
