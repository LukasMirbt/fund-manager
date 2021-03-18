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

      {portfolio[fundName].map(([numberOfShares, date]) => {
        return (
          <Item variant="body1" key={fundName}>
            {`${numberOfShares} shares purchased on ${format(
              date,
              "MMMM d, yyyy"
            )}`}
          </Item>
        );
      })}
    </Container>
  );
};

export default PurchasingHistory;
