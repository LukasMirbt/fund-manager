import React from "react";
import styled from "styled-components";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useSelector, useDispatch } from "react-redux";
import ButtonBase from "@material-ui/core/ButtonBase";
import {
  setIsDataDownsampled,
  setIsDataInPercent,
  setIsTableHidden,
} from "../../../redux/fundList/actionCreators";
import {
  getIsDataDownsampled,
  getIsDataInPercent,
  getIsTableHidden,
} from "../../../redux/selectors";

const Container = styled.div`
  display: flex;
  margin-top: ${({ theme: { drawerSpacingTop } }) => drawerSpacingTop};
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.div`
  color: rgba(0, 0, 0, 0.87);
  font-size: 0.875rem;
  text-align: center;
  border-radius: 4px;
  margin-bottom: 0.5rem;
  letter-spacing: 0.1px;
`;

const SwitchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  justify-content: center;
`;

const SwitchOption = styled(ButtonBase)`
  width: 3rem;
  height: 2rem;
  padding: 0.5rem;
  font-size: 0.875rem;
  min-width: 64px;
  box-shadow: ${({ theme, sc: { selected } }) =>
    selected === true ? theme.shadows[1] : theme.shadows[2]};
  text-align: center;
  font-family: ${({ theme: { fontFamily } }) => fontFamily};
  font-weight: 500;
  margin-right: 0.5rem;
  border-radius: 4px;
  letter-spacing: 0.1px;
  text-transform: uppercase;

  background-color: ${({ sc: { selected } }) =>
    selected === true ? "rgba(0, 0, 0, 0.12)" : "inherit"};

  :hover {
    background-color: ${({ sc: { selected } }) =>
      selected === true ? "rgb(0, 0, 0, 0.2)" : "rgb(0, 0, 0, 0.08)"};
  }
`;

const Settings = ({ hideTableSetting = false }) => {
  const dispatch = useDispatch();

  const isDataInPercent = useSelector((state) => getIsDataInPercent(state));
  const isDataDownsampled = useSelector((state) => getIsDataDownsampled(state));
  const isTableHidden = useSelector((state) => getIsTableHidden(state));

  const setPercent = () => {
    if (isDataInPercent === true) return;
    dispatch(setIsDataInPercent(true));
  };

  const setNAV = () => {
    if (isDataInPercent === false) return;
    dispatch(setIsDataInPercent(false));
  };

  const setAuto = () => {
    if (isDataDownsampled === true) return;
    dispatch(setIsDataDownsampled(true));
  };

  const setAll = () => {
    if (isDataDownsampled === false) return;
    dispatch(setIsDataDownsampled(false));
  };

  const showTable = () => {
    if (isTableHidden === false) return;
    dispatch(setIsTableHidden(false));
  };

  const hideTable = () => {
    if (isTableHidden === true) return;
    dispatch(setIsTableHidden(true));
  };

  const isLargerScreen = useMediaQuery("(min-width: 1600px)");

  return (
    <Container>
      {hideTableSetting === false && isLargerScreen === true && (
        <>
          <Title>Table</Title>
          <SwitchContainer>
            <SwitchOption sc={{ selected: !isTableHidden }} onClick={showTable}>
              Show
            </SwitchOption>

            <SwitchOption sc={{ selected: isTableHidden }} onClick={hideTable}>
              Hide
            </SwitchOption>
          </SwitchContainer>
        </>
      )}

      <Title>Data point density</Title>

      <SwitchContainer>
        <SwitchOption sc={{ selected: isDataDownsampled }} onClick={setAuto}>
          Auto
        </SwitchOption>

        <SwitchOption sc={{ selected: !isDataDownsampled }} onClick={setAll}>
          All
        </SwitchOption>
      </SwitchContainer>

      <Title>Y-axis unit</Title>

      <SwitchContainer>
        <SwitchOption
          sc={{ selected: isDataInPercent }}
          style={{ fontSize: "1rem" }}
          onClick={setPercent}
        >
          %
        </SwitchOption>

        <SwitchOption sc={{ selected: !isDataInPercent }} onClick={setNAV}>
          NAV
        </SwitchOption>
      </SwitchContainer>
    </Container>
  );
};

export default Settings;
