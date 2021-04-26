import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StyledButton = styled(Button)`
  display: flex;
  margin-top: 1rem;
  width: 250px;
`;

const Icon = styled(FontAwesomeIcon)`
  font-size: 1.5rem;
  margin-bottom: 0.25rem;
`;

const CardButton = ({ buttonText, link, icon }) => {
  return (
    <Link href={link}>
      <StyledButton
        endIcon={<Icon icon={icon} />}
        color="primary"
        variant="contained"
      >
        {buttonText}
      </StyledButton>
    </Link>
  );
};

export default CardButton;
