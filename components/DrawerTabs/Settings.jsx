import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import {
  setIsChartShowing,
  setIsDataDownsampled,
  setIsDataInPercent,
  setArePatternsShowing,
} from "../../redux/general/actionCreators";
import { setIsFundListShowing } from "../../redux/fundList/actionCreators";
import {
  getArePatternsShowing,
  getIsChartShowing,
  getIsDataDownsampled,
  getIsDataInPercent,
  getIsFundListShowing,
} from "../../redux/selectors";
import RadioButtonToggle from "./RadioButtonToggle";
import { useRouter } from "next/router";

const Container = styled.div`
  margin-top: 1rem;
  padding-left: 1.5rem;
`;

const Settings = () => {
  const dispatch = useDispatch();

  const { pathname } = useRouter();

  return (
    <Container>
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

      <RadioButtonToggle
        selector={(state) => getArePatternsShowing(state)}
        setValue={(value) => {
          dispatch(setArePatternsShowing(value));
        }}
        groupLabel="Chart patterns"
        label1="Enabled"
        label2="Disabled"
      />

      {pathname === "/" && (
        <>
          <RadioButtonToggle
            selector={(state) => getIsFundListShowing(state)}
            setValue={(value) => {
              dispatch(setIsFundListShowing(value));
            }}
            groupLabel="Fund list"
            label1="Show"
            label2="Hide"
          />

          <RadioButtonToggle
            selector={(state) => getIsChartShowing(state)}
            setValue={(value) => {
              dispatch(setIsChartShowing(value));
            }}
            groupLabel="Chart"
            label1="Show"
            label2="Hide"
          />
        </>
      )}
    </Container>
  );
};

export default Settings;
