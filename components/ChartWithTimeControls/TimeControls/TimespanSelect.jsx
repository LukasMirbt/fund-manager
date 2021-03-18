import React from "react";
import styled from "styled-components";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { END_DATE, START_DATE } from "../../../utils/constants";
import { subMonths } from "date-fns";
import { batch, useDispatch, useSelector } from "react-redux";
import { getSelectedTimespan } from "../../../redux/selectors";
import {
  setDateParameters,
  setSelectedTimespan,
} from "../../../redux/general/actionCreators";

const timespans = [
  { value: "max", label: "Max" },
  { value: 5, label: "5 years" },
  { value: 3, label: "3 years" },
  { value: 1, label: "1 year" },
  { value: 0.5, label: "6 months" },
];

const labelID = "timespanSelectLabel";

const StyledSelect = styled(Select)`
  width: 300px;
`;

const TimeControls = () => {
  const dispatch = useDispatch();
  const selectedTimespan = useSelector((state) => getSelectedTimespan(state));

  const onChange = (event) => {
    const timespan = event.target.value;

    if (timespan === "") {
      dispatch(setSelectedTimespan(timespan));
      return;
    }

    if (timespan === "max") {
      batch(() => {
        dispatch(setSelectedTimespan(timespan));
        dispatch(
          setDateParameters({
            start: START_DATE,
            end: END_DATE,
          })
        );
      });
    } else {
      batch(() => {
        dispatch(setSelectedTimespan(timespan));
        dispatch(
          setDateParameters({
            start: subMonths(END_DATE, timespan * 12),
            end: END_DATE,
          })
        );
      });
    }
  };

  return (
    <FormControl variant="filled">
      <InputLabel id={labelID}>Select timespan</InputLabel>
      <StyledSelect
        labelId={labelID}
        id="timespanSelect"
        value={selectedTimespan}
        onChange={onChange}
        label="Select timespan"
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {timespans.map(({ value, label }) => (
          <MenuItem key={value} value={value}>
            {label}
          </MenuItem>
        ))}
      </StyledSelect>
    </FormControl>
  );
};

export default TimeControls;
