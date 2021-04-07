import React from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { getInfoFundName, getPortfolio } from "../../../redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import { setInfoFundName } from "../../../redux/portfolio/actionCreators";
import Typography from "@material-ui/core/Typography";

const StyledAutocomplete = styled(Autocomplete)`
  width: 300px;
  /*   margin-bottom: 1rem; */
`;

const Container = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  border-bottom: ${({ theme }) => `1px solid ${theme.palette.divider}`};
`;

const Title = styled(Typography)`
  margin-right: 1rem;
  font-size: 1.25rem;
`;

const TitleRow = () => {
  const infoFundName = useSelector((state) => getInfoFundName(state));
  const portfolio = useSelector((state) => getPortfolio(state));

  const dispatch = useDispatch();

  return (
    <Container>
      <Title variant="h2">Fund information</Title>
      <StyledAutocomplete
        disableClearable
        value={infoFundName}
        onChange={(event, newValue) => {
          dispatch(setInfoFundName(newValue));
        }}
        id="fundInfoAutocomplete"
        options={Object.keys(portfolio)}
        renderInput={(params) => (
          <TextField {...params} label="Select fund" variant="filled" />
        )}
      />
    </Container>
  );
};

export default TitleRow;
