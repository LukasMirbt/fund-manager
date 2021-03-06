import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import {
  getData,
  getSelectedFundNameToBuy,
  getTableData,
} from "../../../../../../redux/selectors";
import getChartData from "../../../../../../redux/getChartData";
import { setSelectedFundNameToBuy } from "../../../../../../redux/portfolio/actionCreators";

const StyledAutocomplete = styled(Autocomplete)`
  margin-bottom: 1rem;
`;

const FundNameAutocomplete = () => {
  const fundNames = useSelector((state) => getTableData(state)).map(
    ({ fundName }) => fundName
  );

  const dispatch = useDispatch();

  const data = useSelector((state) => getData(state));

  const selectedFundNameToBuy = useSelector((state) =>
    getSelectedFundNameToBuy(state)
  );

  const ref = useRef();

  useEffect(() => {
    ref.current.focus();
  }, []);

  return (
    <StyledAutocomplete
    data-cy="buyFundFundNameInput"
      disableClearable
      value={selectedFundNameToBuy}
      onChange={(event, fundName) => {
        if (data[fundName].chartData === undefined) {
          dispatch(
            getChartData(fundName, () => {
              dispatch(setSelectedFundNameToBuy(fundName));
            })
          );
        } else {
          dispatch(setSelectedFundNameToBuy(fundName));
        }
      }}
      id="buyFundAutocomplete"
      options={fundNames}
      renderInput={(params) => (
        <TextField
          {...params}
          inputRef={ref}
          label="Select fund"
          variant="outlined"
        />
      )}
    />
  );
};

export default FundNameAutocomplete;
