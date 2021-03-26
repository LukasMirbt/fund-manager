import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import {
  getPortfolio,
  getSelectedFundNameToSell,
} from "../../../../redux/selectors";
import { setSelectedFundNameToSell } from "../../../../redux/portfolio/actionCreators";

const StyledAutocomplete = styled(Autocomplete)`
  margin-bottom: 1rem;
`;

const FundNameAutocomplete = () => {
  const portfolio = useSelector((state) => getPortfolio(state));

  const dispatch = useDispatch();

  const selectedFundNameToSell = useSelector((state) =>
    getSelectedFundNameToSell(state)
  );

  return (
    <StyledAutocomplete
      disableClearable
      value={selectedFundNameToSell}
      onChange={(event, fundName) => {
        dispatch(setSelectedFundNameToSell(fundName));
      }}
      id="buyFundAutocomplete"
      options={Object.keys(portfolio)}
      renderInput={(params) => (
        <TextField {...params} label="Select fund" variant="outlined" />
      )}
    />
  );
};

export default FundNameAutocomplete;
