import React from "react";
import { KeyboardDatePicker } from "@material-ui/pickers";
import { START_DATE, END_DATE } from "../../../utils/constants";

const DatePicker = ({
  selectedDate,
  onSelect,
  label,
  ariaLabel,
  className,
}) => {
  return (
    <KeyboardDatePicker
      className={className}
      id={label}
      label={label}
      clearable
      disableFuture
      value={selectedDate}
      placeholder="10/10/2018"
      onChange={onSelect}
      minDate={START_DATE}
      maxDate={END_DATE}
      format="dd/MM/yyyy"
      KeyboardButtonProps={{
        "aria-label": ariaLabel,
      }}
    />
  );
};

export default DatePicker;
