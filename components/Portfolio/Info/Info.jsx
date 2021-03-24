import React, { useState } from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import PurchasingHistory from "./PurchasingHistory";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { getInfoFundName, getPortfolio } from "../../../redux/selectors";
import { useSelector } from "react-redux";

const Container = styled.div`
  padding: 1rem;
  border-left: ${({ theme }) => `1px solid ${theme.palette.divider}`};

  position: absolute;
  bottom: 0;

  height: 50%;
  width: 100%;
`;

const Title = styled(Typography)`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  margin-right: 1rem;
`;

const Info = () => {
  const infoFundName = useSelector((state) => getInfoFundName(state));
  return infoFundName !== null ? (
    <Container>
      <Title>{infoFundName}</Title>
      <PurchasingHistory fundName={infoFundName} />
    </Container>
  ) : null;
};

export default Info;
