import React from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";

export const Subheading = styled(Typography)`
  margin-bottom: 0.25rem;
`;

export const Body = styled(Typography)`
  margin-bottom: 0.5rem;
`;

const Description = () => {
  return (
    <>
      <Subheading variant="h6" component="h3">
        Description
      </Subheading>

      <Body variant="body1">
        {`Contrary to popular belief, Lorem Ipsum is not simply random text. 
        It has roots in a piece of classical Latin literature from 45 BC, 
        making it over 2000 years old. Richard McClintock, 
        a Latin professor at Hampden-Sydney College in Virginia, 
        looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, 
        and going through the cites of the word in classical literature, 
        discovered the undoubtable source.`}
      </Body>
    </>
  );
};

export default Description;
