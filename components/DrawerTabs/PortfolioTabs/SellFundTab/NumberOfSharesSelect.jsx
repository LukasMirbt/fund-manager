import React from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import { useDispatch, useSelector } from "react-redux";
import { getNumberOfSharesToSell } from "../../../../redux/selectors";
import { setNumberOfSharesToSell } from "../../../../redux/portfolio/actionCreators";

const StyledTextField = styled(TextField)`
  margin-bottom: 1rem;
`;

const NumberOfSharesSelect = () => {
  const numberOfSharesToSell = useSelector((state) =>
    getNumberOfSharesToSell(state)
  );
  const dispatch = useDispatch();

  return (
    <StyledTextField
      value={numberOfSharesToSell}
      onChange={(event) => {
        dispatch(setNumberOfSharesToSell(event.target.value));
      }}
      InputLabelProps={{
        shrink: true,
      }}
      id="numberOfSharesInput"
      label="Number of shares"
      type="number"
      variant="outlined"
    />
  );
};

export default NumberOfSharesSelect;
