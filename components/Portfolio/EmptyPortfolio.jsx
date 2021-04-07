import React from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { useRouter } from "next/router";
import { batch, useDispatch } from "react-redux";
import { setIsTemporaryDrawerOpen } from "../../redux/general/actionCreators";
import { setIsBuyFundDialogOpen } from "../../redux/portfolio/actionCreators";

const Container = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-left: ${({ theme }) => `1px solid ${theme.palette.divider}`};
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
  font-size: 2rem;
`;

const StyledButton = styled(Button)``;

const Portfolio = () => {
  const dispatch = useDispatch();

  return (
    <Container>
      <Column>
        <Text variant="h2">Your portfolio is currently empty</Text>
        <StyledButton
          onClick={() => {
            batch(() => {
              dispatch(setIsTemporaryDrawerOpen(true));
              dispatch(setIsBuyFundDialogOpen(true));
            });
          }}
          color="primary"
          variant="contained"
        >
          Buy funds
        </StyledButton>
      </Column>
    </Container>
  );
};

export default Portfolio;
