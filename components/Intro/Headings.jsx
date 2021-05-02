import React from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";

const Title = styled(Typography)`
  font-size: 3rem;
  text-align: center;

  @media screen and (min-width: 800px) {
    text-align: unset;
  }
`;

const Subtitle = styled(Typography)`
  margin-top: 2rem;
  font-size: 1.5rem;
`;

const Headings = () => {
  return (
    <>
      <Title variant="h3" component="h1">
        Fund Manager
      </Title>
      <Subtitle variant="h4" component="h2">
        {`Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it (to make a type specimen book).`}
      </Subtitle>
    </>
  );
};

export default Headings;
