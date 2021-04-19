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
  padding-right: 0.5rem;
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

      {portfolio[fundName].buyHistory.map(
        ({ numberOfBoughtShares, buyDate }, index) => {
          return (
            <Item variant="body1" component="p" key={index}>
              {`Bought ${numberOfBoughtShares} ${
                numberOfBoughtShares === 1 ? "share" : "shares"
              } on ${format(buyDate, "MMMM d, yyyy")}`}
            </Item>
          );
        }
      )}

      {portfolio[fundName].sellHistory !== undefined &&
        portfolio[fundName].sellHistory.map(
          ({ numberOfSoldShares, sellDate }, index) => {
            return (
              <Item variant="body1" component="p" key={index}>
                {`You sold ${numberOfSoldShares} ${
                  numberOfSoldShares === 1 ? "share" : "shares"
                } on ${format(sellDate, "MMMM d, yyyy")}`}
              </Item>
            );
          }
        )}
    </Container>
  );
};

export default TransactionHistory;
