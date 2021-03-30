import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { getPortfolio } from "../../../redux/selectors";
import { format } from "date-fns";
import Typography from "@material-ui/core/Typography";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  margin-left: 1.25rem;
`;

const Item = styled(Typography)`
  padding-bottom: 0.5rem;
`;

const Title = styled(Typography)`
  font-size: 1.25rem;
  margin-right: 1rem;
  margin-bottom: 0.5rem;
`;

const TransactionHistory = ({ fundName }) => {
  const portfolio = useSelector((state) => getPortfolio(state));

  return (
    <Container>
      <Title variant="h4" component="h2">
        Transaction history
      </Title>
      <List>
        {portfolio[fundName].buyHistory.map(
          ({ numberOfBoughtShares, buyDate }) => {
            return (
              <Item variant="body1" component="li" key={fundName}>
                {`${numberOfBoughtShares} shares bought on ${format(
                  buyDate,
                  "MMMM d, yyyy"
                )}`}
              </Item>
            );
          }
        )}

        {portfolio[fundName].sellHistory !== undefined &&
          portfolio[fundName].sellHistory.map(
            ({ numberOfSoldShares, sellDate }) => {
              return (
                <Item variant="body1" component="li" key={fundName}>
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
