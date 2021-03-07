import React, { useRef } from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { useRouter } from "next/router";
import Inputs from "./Inputs";
import Items from "./Items";

const StyledForm = styled.form`
  width: 100%;
  margin-top: 0.5rem;
`;

const Form = () => {
  const usernameInputRef = useRef();
  const passwordInputRef = useRef();
  return (
    <StyledForm
      onSubmit={(e) => {
        e.preventDefault();
      }}
      noValidate
    >
      <Inputs
        usernameInputRef={usernameInputRef}
        passwordInputRef={passwordInputRef}
      />
      <Items
        usernameInputRef={usernameInputRef}
        passwordInputRef={passwordInputRef}
      />
    </StyledForm>
  );
};

export default Form;
