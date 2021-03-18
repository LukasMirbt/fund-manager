import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import {
  setIsDataDownsampled,
  setIsDataInPercent,
} from "../../redux/general/actionCreators";
import { setIsFundListShowing } from "../../redux/fundList/actionCreators";
import {
  getIsDataDownsampled,
  getIsDataInPercent,
  getIsFundListShowing,
} from "../../redux/selectors";
import RadioButtonToggle from "./FundListTabs/RadioButtonToggle";

const Container = styled.div`
  margin-top: 1rem;
  padding-left: 1.5rem;
`;

const Settings = () => {
  const dispatch = useDispatch();

  return (
    <Container>
      <RadioButtonToggle
        selector={(state) => getIsFundListShowing(state)}
        setValue={(value) => {
          dispatch(setIsFundListShowing(value));
        }}
        groupLabel="Toggle fund list"
        label1="Show"
        label2="Hide"
      />

      <RadioButtonToggle
        selector={(state) => getIsDataDownsampled(state)}
        setValue={(value) => {
          dispatch(setIsDataDownsampled(value));
        }}
        groupLabel="Datapoint density"
        label1="Auto"
        label2="All"
      />

      <RadioButtonToggle
        selector={(state) => getIsDataInPercent(state)}
        setValue={(value) => {
          dispatch(setIsDataInPercent(value));
        }}
        groupLabel="Data unit"
        label1="Percent"
        label2="NAV"
      />
    </Container>
  );
};

export default Settings;
