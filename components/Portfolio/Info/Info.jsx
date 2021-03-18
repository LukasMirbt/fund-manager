import React, { useState } from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import PurchasingHistory from "./PurchasingHistory";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { getPortfolio } from "../../../redux/selectors";
import { useSelector } from "react-redux";

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  padding: 1rem;
  border-left: ${({ theme }) => `1px solid ${theme.palette.divider}`};

  display: flex;
  height: 100%;
`;

const Title = styled(Typography)`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  margin-right: 1rem;
`;

const StyledAutocomplete = styled(Autocomplete)`
  margin-bottom: 1rem;
  min-width: 300px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
`;

const Info = () => {
  const portfolio = useSelector((state) => getPortfolio(state));

  const fundNames = Object.keys(portfolio);

  const [selectedFundName, setSelectedFundName] = useState(fundNames[0]);
  return (
    <Container>
      <Column>
        <Row>
          <Title variant="h2">{"View history"}</Title>

          <StyledAutocomplete
            id="fundInfoAutocomplete"
            disableClearable
            value={selectedFundName}
            onChange={(event, newValue) => {
              setSelectedFundName(newValue);
            }}
            options={fundNames}
            getOptionLabel={(option) => option}
            renderInput={(params) => (
              <TextField {...params} label="Select fund" variant="filled" />
            )}
          />
        </Row>

        <PurchasingHistory fundName={selectedFundName} />
      </Column>
    </Container>
  );
};

export default Info;
