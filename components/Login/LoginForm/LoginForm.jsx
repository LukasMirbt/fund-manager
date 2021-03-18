import React from "react";
import styled from "styled-components";
import Inputs from "./Inputs";
import Items from "./Items";

const StyledForm = styled.form`
  width: 100%;
  margin-top: 0.5rem;
`;

const Form = () => {
  return (
    <StyledForm
      onSubmit={(e) => {
        e.preventDefault();
      }}
      noValidate
    >
      <Inputs />
      <Items />
    </StyledForm>
  );
};

export default Form;
