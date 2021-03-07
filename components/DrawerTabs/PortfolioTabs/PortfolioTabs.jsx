import React from "react";
import BuySellTabs from "./BuySellTabs";
import PortfolioDropdownTabs from "./PortfolioDropdownTabs";
import { useSelector } from "react-redux";
import { getCredentials } from "../../../redux/selectors";

const PortfolioTabs = () => {
  const credentials = useSelector((state) => getCredentials(state));
  return credentials.token !== undefined ? (
    <>
      <BuySellTabs />
      <PortfolioDropdownTabs />
    </>
  ) : null;
};

export default PortfolioTabs;
