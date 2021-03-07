import React from "react";
import styled from "styled-components";
import ChartSpinner from "../common/components/ChartSpinner";
import Typography from "@material-ui/core/Typography";

export const Container = styled.div`
  position: relative;

  display: flex;
  align-items: flex-end;
  justify-content: center;

  padding-top: 1rem;
`;

export const StyledTitle = styled(Typography)`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.3125rem;
  font-size: 1.75rem;
`;

const Title = ({ title }) => {
  return (
    <Container>
      <StyledTitle variant="h3" component="h1">
        {title}
        <ChartSpinner />
      </StyledTitle>
    </Container>
  );
};

export default Title;
