import React from "react";
import styled, { keyframes, css } from "styled-components";
import Typography from "@material-ui/core/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const fadeInKeyframes = keyframes`
  from {
   opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const Title = styled(Typography)`
  font-size: 1.75rem;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 0.5rem;
`;

const Icon = styled(FontAwesomeIcon)`
  font-size: 1.5rem;
  margin-left: 0.5rem;
  color: rgba(0, 0, 0, 0.87);
`;

const CardTitle = ({ title, icon }) => {
  return (
    <Row>
      <Title variant="h2">{title}</Title>
      <Icon icon={icon} />
    </Row>
  );
};

export default CardTitle;
