import React from "react";
import styled from "styled-components";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { useSelector } from "react-redux";

const StyledFormControl = styled(FormControl)`
  margin-bottom: 0.5rem;
  width: 100%;

  &:last-child {
    margin-bottom: 0;
  }
`;

const RadioButtonToggle = ({
  selector,
  setValue,
  label1,
  label2,
  groupLabel,
}) => {
  const value = useSelector(selector);

  const onChange = (event) => {
    //The DOM API casts the value to a string, making this conversion neccessary
    const value = event.target.value === "true";

    setValue(value);
  };

  return (
    <StyledFormControl component="fieldset">
      <FormLabel component="legend">{groupLabel}</FormLabel>
      <RadioGroup
        aria-label={groupLabel}
        name={groupLabel}
        value={value}
        onChange={onChange}
      >
        <FormControlLabel
          value={true}
          control={<Radio color="primary" />}
          label={label1}
        />
        <FormControlLabel
          value={false}
          control={<Radio color="primary" />}
          label={label2}
        />
      </RadioGroup>
    </StyledFormControl>
  );
};

export default RadioButtonToggle;
