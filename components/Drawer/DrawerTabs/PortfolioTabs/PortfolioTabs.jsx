import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { getCredentials } from "../../../../redux/selectors";
import BuyFundsTab from "./BuyFundTab/BuyFundTab";
import SellFundTab from "./SellFundTab/SellFundTab";

const TransactionContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: ${({ theme }) => `1px solid ${theme.palette.divider}`};
  padding: 0.5rem 0;
`;

const PortfolioTabs = () => {
  const credentials = useSelector((state) => getCredentials(state));
  return credentials.token !== undefined ? (
    <>
      <TransactionContainer>
        <BuyFundsTab />
        <SellFundTab />
      </TransactionContainer>
    </>
  ) : null;
};

export default PortfolioTabs;
