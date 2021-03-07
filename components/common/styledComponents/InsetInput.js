import styled from "styled-components";

const InsetInput = styled.input`
  border: none;
  height: 1rem;
  padding: 0.5rem;
  font-size: 0.875rem;
  min-width: 64px;
  box-shadow: inset 0px 1px 3px 1px rgba(0, 0, 0, 0.2),
    inset 0px 1px 1px 1px rgba(0, 0, 0, 0.14),
    inset 0px 2px 1px 0px rgba(0, 0, 0, 0.12);
  text-align: center;
  font-family: ${({ theme: { fontFamily } }) => fontFamily};
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 1);
  :hover {
    background-color: rgb(235, 235, 235);
  }
  :focus {
    outline: none;
    box-shadow: 0px 0px 0px 2px #5594fa,
      inset 0px 0px 1px 1px rgba(0, 0, 0, 0.2),
      inset 0px 1px 1px 1px rgba(0, 0, 0, 0.14),
      inset 0px 1px 1px 0px rgba(0, 0, 0, 0.12);
    background-color: rgba(255, 255, 255, 1);
  }
  ::placeholder {
    color: rgba(0, 0, 0, 0.87);
    opacity: 1;
  }
  :focus::placeholder {
    color: transparent;
  }
`;

export default InsetInput;
