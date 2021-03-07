import React, { useState } from "react";
import { string, func } from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton";
import InsetInput from "../styledComponents/InsetInput";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5rem;
`;

const SubmitButton = styled(IconButton)`
  width: 2.25rem;
  height: 2.25rem;
  padding: 0;
  margin-left: 0.25rem;
`;

const Input = styled(InsetInput)`
  width: 8rem;
`;

const propTypes = {
  placeholder: string.isRequired,
  submit: func.isRequired
};

const InsetInputWithButton = ({ placeholder, submit }) => {
  const [text, setText] = useState("");

  const setEventInState = e => {
    e.preventDefault();
    setText(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    submit(text)();
  };

  return (
    <Container>
      <form onSubmit={onSubmit}>
        <Input
          autoCorrect="off"
          spellCheck={false}
          data-testid="FundSearchInput"
          type="text"
          placeholder={placeholder}
          value={text}
          onChange={setEventInState}
        />
      </form>

      <SubmitButton onClick={submit(text)}>
        <FontAwesomeIcon icon={faArrowRight} />
      </SubmitButton>
    </Container>
  );
};

InsetInput.propTypes = propTypes;

export default InsetInputWithButton;
