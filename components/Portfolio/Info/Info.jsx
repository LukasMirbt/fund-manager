import React from "react";
import styled from "styled-components";
import TransactionHistory from "./TransactionHistory";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { getInfoFundName, getPortfolio } from "../../../redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import { setInfoFundName } from "../../../redux/portfolio/actionCreators";

const Container = styled.div`
  padding: 1.5rem;
  border-left: ${({ theme }) => `1px solid ${theme.palette.divider}`};

  height: 34%;
  width: 100%;
`;

const StyledAutocomplete = styled(Autocomplete)`
  width: 400px;
  margin-bottom: 1rem;
`;

const Info = () => {
  const infoFundName = useSelector((state) => getInfoFundName(state));
  const portfolio = useSelector((state) => getPortfolio(state));

  const dispatch = useDispatch();

  return infoFundName !== null ? (
    <Container>
      <StyledAutocomplete
        disableClearable
        value={infoFundName}
        onChange={(event, newValue) => {
          dispatch(setInfoFundName(newValue));
        }}
        id="fundInfoAutocomplete"
        options={Object.keys(portfolio)}
        renderInput={(params) => (
          <TextField {...params} label="Select fund" variant="filled" />
        )}
      />

      <TransactionHistory fundName={infoFundName} />
    </Container>
  ) : null;
};

export default Info;
