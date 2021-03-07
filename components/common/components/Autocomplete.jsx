import React, { useState } from "react";
import styled from "styled-components";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import InsetInput from "../styledComponents/InsetInput";

const Input = styled(InsetInput)`
  width: 10.5rem;
`;

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  ${({ sc: { style } }) => ({ ...style })};
`;

const Popper = styled(List)`
  box-shadow: ${({ theme: { shadows } }) => shadows[2]};
  margin: 0.5rem;
  background-color: white;
  position: absolute;
  top: 2rem;
  left: 0;
  display: flex;
  flex-direction: column;
  width: calc(240px - 1rem);
  z-index: 5000;
`;

const Option = styled(ListItem)`
  display: block;
`;

const Letter = styled.span`
  font-weight: ${({ sc: { isHighlighted } }) =>
    isHighlighted === true ? "700" : "400"};
`;

const Autocomplete = ({
  options,
  placeholder,
  submit,
  numberOfOptions = 5,
  style
}) => {
  const [inputValue, setInputValue] = useState("");
  const [areOptionsShowing, setAreOptionsShowing] = useState(true);

  const onChange = event => {
    setInputValue(event.target.value);
  };

  const showOptions = () => {
    if (areOptionsShowing === true) return;
    setAreOptionsShowing(true);
  };

  const hideOptions = () => {
    setAreOptionsShowing(false);
  };

  const shownOptions = options
    .filter(option => option.toLowerCase().includes(inputValue.toLowerCase()))
    .slice(0, numberOfOptions);

  const onOptionClick = option => () => {
    submit(option, setInputValue);
    setAreOptionsShowing(false);
  };

  const isPopperShowing =
    areOptionsShowing === true &&
    inputValue !== "" &&
    shownOptions.length !== 0;

  return (
    <>
      <ClickAwayListener onClickAway={hideOptions}>
        <Container sc={{ style }}>
          <Input
            placeholder={placeholder}
            value={inputValue}
            onClick={showOptions}
            onChange={onChange}
            autoCorrect="off"
            spellCheck={false}
          />

          {isPopperShowing && (
            <Popper>
              {shownOptions.map(option => {
                const firstIndexToHighlight = option
                  .toLowerCase()
                  .indexOf(inputValue.toLowerCase());

                const lastIndexToHighlight =
                  firstIndexToHighlight + inputValue.length - 1;
                return (
                  <Option onClick={onOptionClick(option)} key={option} button>
                    {inputValue === ""
                      ? option
                      : option.split("").map((letter, index) => {
                          return (
                            <Letter
                              sc={{
                                isHighlighted:
                                  index >= firstIndexToHighlight &&
                                  index <= lastIndexToHighlight
                              }}
                              key={index}
                            >
                              {letter}
                            </Letter>
                          );
                        })}
                  </Option>
                );
              })}
            </Popper>
          )}
        </Container>
      </ClickAwayListener>
    </>
  );
};

export default Autocomplete;
