import React from "react";
import { string } from "prop-types";
import moment from "moment";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { getPortfolio } from "../../redux/selectors";

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  grid-area: Info;
  padding: 1.5rem;
  /* box-shadow: -1px 0px 0px 0px rgba(0, 0, 0, 0.2); */
  z-index: 1;
`;

const Item = styled.div`
  font-size: 0.875rem;
  padding-bottom: 0.5rem;
`;

const Title = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
  padding-bottom: 0.5rem;
`;

const Subtitle = styled.div`
  font-size: 1rem;
  padding-bottom: 0.5rem;
`;

const propTypes = {
  fundName: string.isRequired,
};

const Info = ({ fundName, className }) => {
  const portfolio = useSelector((state) => getPortfolio(state));

  return (
    <Container className={className}>
      <Column>
        <Title>{fundName}</Title>

        <Subtitle>Purchasing history</Subtitle>

        {fundName === "Total" ? (
          <div>Total</div>
        ) : (
          portfolio[fundName].map((sharesAndDate) => {
            const shares = sharesAndDate[0];
            const date = moment(sharesAndDate[1]).format("YYYY-MM-DD");
            const text = shares > 1 ? " shares purchased" : " share purchased";
            return (
              <Item key={fundName}>
                {date}
                <br />
                {shares}
                {text}
              </Item>
            );
          })
        )}
      </Column>
    </Container>
  );
};

Info.propTypes = propTypes;

export default Info;
