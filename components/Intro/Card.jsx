import React from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import CardTitle from "./CardTitle";
import CardButton from "./CardButton";

const Container = styled(Paper)`
  width: 500px;
  height: 250px;
  display: flex;

  justify-content: center;
  flex-direction: column;
  align-items: center;

  padding: 1.5rem;
  margin-bottom: 1rem;
  margin-right: unset;

  @media screen and (min-width: 1596px) {
    margin-right: 1.5rem;
    height: 300px;
  }

  box-shadow: ${({ theme }) => theme.shadows[24]};

  &:last-child {
    margin-right: 0;
  }
`;

const Text = styled(Typography)`
  font-size: 1.125rem;

  @media screen and (min-width: 1596px) {
    font-size: 1.25rem;
  }
`;

const Card = ({ title, text, buttonText, link, icon }) => {
  return (
    <Container>
      <CardTitle title={title} />

      <Text variant="body1" component="p">
        {text}
      </Text>

      <CardButton buttonText={buttonText} link={link} icon={icon} />
    </Container>
  );
};

export default Card;
