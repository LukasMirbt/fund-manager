import React from "react";
import styled from "styled-components";
import Card from "./Card";
import {
  faClipboardList,
  faBriefcase,
  faClipboardCheck,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const Container = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
  flex-wrap: wrap;
  min-height: 820px;

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
  z-index: 1;

  @media screen and (min-width: 1596px) {
    flex-direction: row;
    margin-top: 0;
  }
`;

const Intro = () => {
  return (
    <Container>
      <Image
        aria-hidden
        src="/laptops.jpeg"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
      <CardContainer>
        <Card
          title="Fund list"
          buttonText="Go to fund list"
          link={"/fund-list"}
          icon={faClipboardList}
          text={`There are many variations of passages of Lorem Ipsum available, 
          but the majority have suffered alteration in some form, by injected humour,
           or randomised words which don't look even slightly believable. If you are going to use a passage.`}
        />
        <Card
          title="Fund advisor"
          buttonText="Our recommendations"
          link={"/fund-advisor"}
          icon={faClipboardCheck}
          text={`It is a long established fact that a reader will 
          be distracted by the readable content of a page when looking at its layout.
           The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters as opposed to using.`}
        />
        <Card
          title="Portfolio"
          buttonText="Go to sign-in"
          link={"/portfolio"}
          icon={faBriefcase}
          text={`Latin words, combined with a handful of model sentence structures, 
          to generate Lorem Ipsum which looks reasonable. 
          The generated Lorem Ipsum is therefore always free from repetition, 
          injected humour, or randomised words.`}
        />
      </CardContainer>
    </Container>
  );
};

export default Intro;
