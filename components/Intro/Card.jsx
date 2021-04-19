import React from "react";
import styled, { keyframes, css } from "styled-components";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Link from "next/link";
import CardTitle from "./CardTitle";

const fadeInKeyframes = keyframes`
  from {
   opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const Container = styled(Paper)`
  width: 500px;
  height: 250px;
  display: flex;

  flex-direction: column;
  align-items: center;

  padding: 1.5rem;
  margin-bottom: 1rem;
  margin-right: unset;

  @media screen and (min-width: 1596px) {
    margin-right: 1.5rem;
  }

  box-shadow: ${({ theme }) => theme.shadows[24]};

  &:last-child {
    margin-right: 0;
  }

  ${({ sc: { animationDelay } }) =>
    css`
      animation: ${fadeInKeyframes} 500ms ease-out ${animationDelay}ms both;
    `};
`;

const Text = styled(Typography)`
  font-size: 1.125rem;
`;

const StyledButton = styled(Button)`
  display: flex;
  margin-top: 1rem;
  width: 250px;
`;

const Card = ({ title, text, buttonText, link, icon, animationDelay }) => {
  return (
    <Container sc={{ animationDelay }}>
      <CardTitle title={title} icon={icon} />

      <Text variant="body1" component="p">
        {text}
      </Text>

      <Link href={link}>
        <StyledButton color="primary" variant="contained">
          {buttonText}
        </StyledButton>
      </Link>
    </Container>
  );
};

export default Card;
