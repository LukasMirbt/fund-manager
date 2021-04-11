import React from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import { useDispatch, useSelector } from "react-redux";
import { getNumberOfSharesToBuy } from "../../../../../redux/selectors";
import { setNumberOfSharesToBuy } from "../../../../../redux/portfolio/actionCreators";

const StyledTextField = styled(TextField)`
  margin-bottom: 1rem;
`;

const NumberOfSharesSelect = () => {
  const numberOfSharesToBuy = useSelector((state) =>
    getNumberOfSharesToBuy(state)
  );
  const dispatch = useDispatch();

  return (
    <StyledTextField
      value={numberOfSharesToBuy}
      onChange={(event) => {
        dispatch(setNumberOfSharesToBuy(event.target.value));
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
