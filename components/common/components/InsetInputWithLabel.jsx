import React from "react";
import styled from "styled-components";
import { string, func } from "prop-types";
import InsetInput from "../styledComponents/InsetInput";

const Container = styled.div`
  font-family: ${({ theme: { fontFamily } }) => fontFamily};
  display: flex;
  align-items: center;
  margin-bottom: 0;
  justify-content: center;
`;

const Input = styled(InsetInput)`
  width: 4.75rem;
  padding: 0.625rem;
  padding-top: 1.25rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
`;

const Column = styled.div`
  display: flex;
  margin-top: -1rem;
  align-items: center;
  flex-direction: column;
`;

const Label = styled.span`
  font-family: ${({ theme: { fontFamily } }) => fontFamily};
  color: rgba(0, 0, 0, 0.6);
  bottom: -1.25rem;
  position: relative;
  font-size: 0.75rem;
  pointer-events: none;
`;

const propTypes = {
  label: string.isRequired,
  placeholder: string.isRequired,
  className: string,
  value: string.isRequired,
  setValue: func.isRequired
};

const defaultProps = {
  className: ""
};

const InsetInputWithLabel = ({
  label,
  placeholder,
  value,
  setValue,
  className
}) => {
  const setEventInState = e => {
    setValue(e.target.value);
  };

  return (
    <Container className={className}>
      <Column>
        <Label>{label}</Label>

        <Input
          data-testid="InsetInputWithLabel"
          autoCorrect="off"
          spellCheck={false}
          placeholder={placeholder}
          value={value}
          onChange={setEventInState}
        />
      </Column>
    </Container>
  );
};

InsetInputWithLabel.propTypes = propTypes;
InsetInputWithLabel.defaultProps = defaultProps;

export default InsetInputWithLabel;
