import React from "react";
import styled from "styled-components";
import Card from "./Card";
import {
  faClipboardList,
  faBriefcase,
  faClipboardCheck,
} from "@fortawesome/free-solid-svg-icons";

const Background = styled.section`
  width: 100%;
  height: 100%;
  min-height: 820px;
  background-size: cover;
  background-image: url("./laptops.jpeg");
  background-repeat: no-repeat;
  background-position: center;

  @media screen and (min-width: 1596px) {
    min-height: unset;
  }
`;

const Container = styled.div`
  display: flex;
  position: relative;
  align-items: flex-start;
  justify-content: center;

  width: 100%;
  height: 100%;
  flex-wrap: wrap;
  min-height: 500px;

  @media screen and (min-width: 1596px) {
    min-height: unset;
    align-items: center;
  }
`;

const CardContainer = styled.div`
  display: flex;
  margin: 0 1.5rem;
  margin-top: 1rem;
  flex-direction: column;

  @media screen and (min-width: 1596px) {
    flex-direction: row;
    margin-top: 0;
  }
`;

const Intro = () => {
  return (
    <Background>
      <Container>
        <CardContainer>
          <Card
            title="Fund list"
            buttonText="Go to fund list"
            link={"/fund-list"}
            icon={faClipboardList}
            animationDelay={250}
            text={`Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`}
          />
          <Card
            title="Fund advisor"
            buttonText="View our recommendations"
            link={"/fund-advisor"}
            icon={faClipboardCheck}
            animationDelay={750}
            text={`Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`}
          />
          <Card
            title="Portfolio"
            buttonText="Go to sign-in"
            link={"/portfolio"}
            icon={faBriefcase}
            animationDelay={1250}
            text={`Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
           Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`}
          />
        </CardContainer>
      </Container>
    </Background>
  );
};

export default Intro;
