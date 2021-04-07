import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { getPortfolio } from "../../../redux/selectors";
import { format } from "date-fns";
import Typography from "@material-ui/core/Typography";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 33%;
  padding-right: 1rem;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const Item = styled(Typography)`
  padding-bottom: 0.5rem;
`;

const Title = styled(Typography)`
  font-size: 1rem;
  margin-right: 1rem;
  margin-bottom: 0.5rem;
`;

const TransactionHistory = ({ fundName }) => {
  const portfolio = useSelector((state) => getPortfolio(state));

  return (
    <Container>
      <Title variant="h6" component="h3">
        Transaction history
      </Title>
      <List>
        {portfolio[fundName].buyHistory.map(
          ({ numberOfBoughtShares, buyDate }, index) => {
            return (
              <Item variant="body1" component="li" key={index}>
                {`You bought ${numberOfBoughtShares} shares on ${format(
                  buyDate,
                  "MMMM d, yyyy"
                )}`}
              </Item>
            );
          }
        )}

        {portfolio[fundName].sellHistory !== undefined &&
          portfolio[fundName].sellHistory.map(
            ({ numberOfSoldShares, sellDate }, index) => {
              return (
                <Item variant="body1" component="li" key={index}>
                  {`${numberOfSoldShares} shares sold on ${format(
                    sellDate,
                    "MMMM d, yyyy"
                  )}`}
                </Item>
              );
            }
          )}
      </List>
    </Container>
  );
};

export default TransactionHistory;
