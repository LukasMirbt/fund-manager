import React from "react";
import styled from "styled-components";
import ChangeTimespanButton from "./ChangeTimespanButton";
import SettingsButton from "./SettingsButton";
import TimespanSelect from "./TimespanSelect";

export const TIME_CONTROLS_HEIGHT = 72;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  height: ${TIME_CONTROLS_HEIGHT}px;
`;

const TimeControls = () => {
  return (
    <Container>
      <ChangeTimespanButton />
      <TimespanSelect />
      <SettingsButton />
    </Container>
  );
};

export default TimeControls;
