import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { getPortfolio } from "../../../redux/selectors";
import { format } from "date-fns";
import Typography from "@material-ui/core/Typography";

const Container = styled.div`
  padding-left: 1rem;
`;

const Item = styled(Typography)`
  padding-bottom: 0.5rem;
`;

const Subtitle = styled(Typography)`
  font-size: 1.25rem;
  padding-bottom: 0.5rem;
`;

const PurchasingHistory = ({ fundName }) => {
  const portfolio = useSelector((state) => getPortfolio(state));

  return (
    <Container>
      <Subtitle variant="h3">Purchasing history</Subtitle>

      {portfolio[fundName].buyHistory.map(
        ({ numberOfBoughtShares, buyDate }) => {
          return (
            <Item variant="body1" key={fundName}>
              {`${numberOfBoughtShares} shares purchased on ${format(
                buyDate,
                "MMMM d, yyyy"
              )}`}
            </Item>
          );
        }
      )}
    </Container>
  );
};

export default PurchasingHistory;
