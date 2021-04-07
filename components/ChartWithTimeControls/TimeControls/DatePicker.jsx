import React from "react";
import { KeyboardDatePicker } from "@material-ui/pickers";
import { START_DATE, END_DATE } from "../../common/constants";

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
      maxDateMessage="No fund data available after 13/05/2019"
    />
  );
};

export default DatePicker;
