import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import styled from "styled-components";

const StyledSpinner = styled(CircularProgress)`
  color: ${({ theme: { primaryColor } }) => primaryColor};
`;

const Spinner = () => <StyledSpinner />;

export default Spinner;
