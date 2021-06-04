import React from "react";
import styled from "styled-components";
import Headings from "./Headings";
import Buttons from "./Buttons";
import Copyright from "../Login/Copyright";

const Container = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  background-image: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0.1)
    ),
    url("./laptops.jpeg");

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Scrim = styled.div`
  z-index: 1;
  max-width: 1000px;
  border-radius: 4px;
  padding: 1.5rem;
  box-shadow: ${({ theme }) => theme.shadows[1]};
  background-color: white;
`;

const CopyrightContainer = styled.div`
  z-index: 1;
  position: absolute;
  bottom: 0;
  right: 0;

  .MuiTypography-colorTextSecondary {
    color: white;
  }

  .MuiBox-root {
    background-color: rgba(0, 0, 0, 0.5);
    padding: 0.25rem;
  }
`;

const Intro = () => {
  return (
    <Container>
      <Scrim>
        <Headings />

        <Buttons />
      </Scrim>

      <CopyrightContainer>
        <Copyright />
      </CopyrightContainer>
    </Container>
  );
};

export default Intro;
