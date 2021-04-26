import React from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";

const Title = styled(Typography)`
  font-size: 1.75rem;
  margin-bottom: 0.25rem;

  @media screen and (min-width: 1596px) {
    font-size: 2rem;
  }
`;

const CardTitle = ({ title }) => {
  return <Title variant="h2">{title}</Title>;
};

export default CardTitle;
