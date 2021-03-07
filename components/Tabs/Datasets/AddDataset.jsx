import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { checkFund } from "../../../redux/general/actionCreators";
import Autocomplete from "../../common/components/Autocomplete";
import { getData, getColors } from "../../../redux/selectors";

const Container = styled.div`
  margin-top: ${({ theme: { drawerSpacingTop } }) => drawerSpacingTop};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const AddDataset = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => getData(state));
  const colors = useSelector((state) => getColors(state));

  const options = Object.keys(data);

  const submitFundName = (fundName, setAutocompleteValue) => {
    dispatch(checkFund(fundName, data, colors));
    setAutocompleteValue("");
  };

  return (
    <Container>
      <Autocomplete
        placeholder="Fund name"
        submit={submitFundName}
        options={options}
        style={{
          marginBottom: "1rem",
        }}
      />
    </Container>
  );
};

export default AddDataset;
