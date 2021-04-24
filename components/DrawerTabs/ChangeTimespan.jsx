import React from "react";
import { batch, useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  setDateParameters,
  setSelectedTimespan,
} from "../../redux/chart/actionCreators";
import { getDateParameters } from "../../redux/selectors";
import DatePicker from "../ChartWithTimeControls/TimeControls/DatePicker";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  margin-top: 0.5rem;
`;

const StyledDatePicker = styled(DatePicker)`
  &:last-child {
    margin-top: 0.5rem;
  }
`;

const ChangeTimespan = () => {
  const dateParameters = useSelector((state) => getDateParameters(state));
  const dispatch = useDispatch();
  return (
    <Container>
      <StyledDatePicker
        label="Start date"
        ariaLabel="Open start date dialog"
        selectedDate={dateParameters.start}
        onSelect={(date) => {
          batch(() => {
            dispatch(
              setDateParameters({
                start: date,
                end: dateParameters.end,
              })
            );

            dispatch(setSelectedTimespan(""));
          });
        }}
      />
      <StyledDatePicker
        label="End date"
        dialogButtonAriaLabel="Open end date dialog"
        selectedDate={dateParameters.end}
        onSelect={(date) => {
          batch(() => {
            dispatch(
              setDateParameters({
                start: dateParameters.start,
                end: date,
              })
            );

            dispatch(setSelectedTimespan(""));
          });
        }}
      />
    </Container>
  );
};

export default ChangeTimespan;
