import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const StyledChevron = styled(FontAwesomeIcon)`
  font-size: 1rem;
  color: rgba(0, 0, 0, 0.54);
`;

const Chevron = ({ isExpanded }) => {
  return (
    <StyledChevron
      icon={isExpanded === true ? faChevronDown : faChevronRight}
    />
  );
};

export default Chevron;
