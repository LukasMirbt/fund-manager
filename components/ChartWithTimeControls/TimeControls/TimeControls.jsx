import React from "react";
import styled from "styled-components";
import OpenTimespanSettingsButton from "./OpenTimespanSettingsButton";
import OpenSettingsButton from "./OpenSettingsButton";
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
      <OpenTimespanSettingsButton />
      <TimespanSelect />
      <OpenSettingsButton />
    </Container>
  );
};

export default TimeControls;
