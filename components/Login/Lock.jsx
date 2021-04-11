import React from "react";
import styled from "styled-components";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

const StyledAvatar = styled(Avatar)`
  margin: 0.5rem;
  background-color: ${({ theme }) => theme.palette.primary.main};
`;

const Lock = () => {
  return (
    <StyledAvatar color="primary">
      <LockOutlinedIcon />
    </StyledAvatar>
  );
};

export default Lock;
