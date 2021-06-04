import React from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";

const Title = styled(Typography)`
  font-size: 3.25rem;
  text-align: center;

  @media screen and (min-width: 800px) {
    text-align: unset;
  }
`;

const Subtitle = styled(Typography)`
  margin-top: 2.25rem;
  font-size: 1.375rem;
`;

const Bold = styled.span`
  font-weight: bold;
`;

const Headings = () => {
  return (
    <>
      <Title variant="h1" component="h1">
        Fund Manager
      </Title>
      <Subtitle variant="h4" component="h2">
        <Bold>{`Concept: `}</Bold>
        {`Fund courses, management and recommendations with high availability. Handles log-in and user creation and manages authentication with web security best practices.`}
        <br />
        <br />
        <Bold>{`Technologies: `}</Bold>
        {`Next.js, React, Redux, MongoDB & Mongoose. Integration tests with Jest and React Testing Library, E2E tests with Cypress as well as CI/CD workflow with GitHub Actions.`}
      </Subtitle>
    </>
  );
};

export default Headings;
