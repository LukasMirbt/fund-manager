import React from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { useRouter } from "next/router";

const EmptyPortfolioContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Column = styled.div`
  position: absolute;
  top: 33%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Text = styled(Typography)`
  margin-bottom: 0.5rem;
`;

const StyledButton = styled(Button)`
  color: rgba(255, 255, 255, 0.87);
  background-color: ${({ theme: { secondaryColor } }) => secondaryColor};
  :hover {
    background-color: ${({ theme: { secondaryColorHover } }) =>
      secondaryColorHover};
  }
`;

const Portfolio = () => {
  const router = useRouter();

  return (
    <EmptyPortfolioContainer>
      <Column>
        <Text variant="h3">Your portfolio is empty!</Text>
        <StyledButton onClick={router.push("/recommended-funds")}>
          Get started
        </StyledButton>
      </Column>
    </EmptyPortfolioContainer>
  );
};

export default Portfolio;
