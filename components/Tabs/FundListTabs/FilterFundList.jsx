import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import IconButton from "@material-ui/core/IconButton";
import { useDispatch } from "react-redux";
import { setSearchTerm } from "../../../redux/fundList/actionCreators";
import InsetInput from "../../common/styledComponents/InsetInput";

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  margin-top: ${({ theme: { drawerSpacingTop } }) => drawerSpacingTop};
  margin-top: ${({ theme: { drawerSpacingBottom } }) => drawerSpacingBottom};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledIconButton = styled(IconButton)`
  width: 2.25rem;
  height: 2.25rem;
  padding: 0;
  margin-left: 0.25rem;
`;

const FilterFundList = ({ setIsOpen }) => {
  const [inputText, setInputText] = useState("");
  const dispatch = useDispatch();

  const formSearch = (e) => {
    e.preventDefault();
    dispatch(setSearchTerm(inputText));
    setIsOpen(0);
  };

  const setEventInState = (e) => {
    e.preventDefault();
    setInputText(e.target.value);
  };

  const onButtonClick = () => {
    dispatch(setSearchTerm(inputText));
    setIsOpen(0);
  };

  return (
    <Container>
      <Form data-testid="FundSearchForm" onSubmit={formSearch}>
        <InsetInput
          autoCorrect="off"
          spellCheck={false}
          data-testid="FundSearchInput"
          placeholder="Search term"
          value={inputText}
          onChange={setEventInState}
        />
      </Form>

      <StyledIconButton onClick={onButtonClick}>
        <FontAwesomeIcon icon={faArrowRight} />
      </StyledIconButton>
    </Container>
  );
};

export default FilterFundList;
