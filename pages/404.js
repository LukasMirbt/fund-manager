import React from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import createInitialState from "../redux/createInitialState";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-top: 5rem;
`;

const Title = styled(Typography)`
  font-size: 3rem;
  font-weight: bold;
`;

const Paragraph = styled(Typography)`
  font-size: 1.5rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const PageNotFound = () => {
  return (
    <Container>
      <Title variant="h1">Page not found</Title>
      <Paragraph variant="body1">
        {"We couldn't find the page you're looking for!"}
      </Paragraph>
    </Container>
  );
};

export default PageNotFound;

export const getStaticProps = createInitialState;
