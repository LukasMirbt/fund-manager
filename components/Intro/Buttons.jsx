import React from "react";
import styled from "styled-components";
import {
  faClipboardList,
  faBriefcase,
  faClipboardCheck,
} from "@fortawesome/free-solid-svg-icons";
import Button from "@material-ui/core/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Container = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;

  @media screen and (min-width: 800px) {
    flex-direction: row;
  }
`;

const StyledButton = styled(Button)`
  width: 200px;
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }

  @media screen and (min-width: 800px) {
    margin-right: 1.5rem;
    margin-bottom: 0;

    &:last-child {
      margin-right: 0;
    }
  }
`;

const Icon = styled(FontAwesomeIcon)`
  font-size: 1.5rem;
  margin-bottom: 0.25rem;
`;

const Buttons = () => {
  return (
    <Container>
      <Link passHref href="/fund-list">
        <StyledButton
          component="a"
          color="primary"
          variant="contained"
          endIcon={<Icon icon={faClipboardList} />}
        >
          Fund list
        </StyledButton>
      </Link>
      <Link passHref href="/fund-advisor">
        <StyledButton
          component="a"
          color="primary"
          variant="contained"
          endIcon={<Icon icon={faClipboardCheck} />}
        >
          Fund advisor
        </StyledButton>
      </Link>
      <Link passHref href="/portfolio">
        <StyledButton
          component="a"
          color="primary"
          variant="contained"
          endIcon={<Icon icon={faBriefcase} />}
        >
          Portfolio
        </StyledButton>
      </Link>
    </Container>
  );
};

export default Buttons;
