import React from "react";
import styled from "styled-components";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "../../../redux/fundList/actionCreators";
import { getSearchTerm } from "../../../redux/selectors";

const StyledFilter = styled.span`
  margin-right: 0.5rem;
`;

const StyledSearchTerm = styled.span`
  font-weight: 500;
`;

const StyledListItem = styled(ListItem)`
  font-family: ${({ theme: { fontFamily } }) => fontFamily};
  height: 3rem;
  display: flex;
  font-size: 0.875rem;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
`;

const SearchTerm = () => {
  const dispatch = useDispatch();

  const searchTerm = useSelector((state) => getSearchTerm(state));

  const removeSearchTerm = () => {
    dispatch(setSearchTerm(""));
  };

  return (
    searchTerm !== "" && (
      <>
        <StyledListItem onClick={removeSearchTerm} button>
          <StyledFilter>Search term:</StyledFilter>

          <StyledSearchTerm>{searchTerm}</StyledSearchTerm>
        </StyledListItem>

        <Divider />
      </>
    )
  );
};

export default SearchTerm;
