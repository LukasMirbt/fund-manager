import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import FundListChart from "./FundListChart";
import { getIsTableHidden } from "../../redux/selectors";
import DataGrid from "./DataGrid/DataGrid";

const Container = styled.section`
  width: 100%;
  height: 100%;

  display: flex;

  /* position: relative; */
`;

const FundList = () => {
  const isTableHidden = useSelector((state) => getIsTableHidden(state));

  return (
    <Container sc={{ isTableHidden }}>
      <FundListChart />
      <DataGrid />
    </Container>
  );
};

export default FundList;
