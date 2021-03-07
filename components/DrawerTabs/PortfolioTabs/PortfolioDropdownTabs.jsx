import React from "react";
import { useSelector } from "react-redux";
import { faCalendarAlt, faCog } from "@fortawesome/free-solid-svg-icons";
import FilterFundList from "../FundListTabs/FilterFundList";
import Settings from "../FundListTabs/Settings";
import { getPortfolioFundName } from "../../../redux/selectors";
import ChangePortfolioTimespan from "./ChangePortfolioTimespan";
import DropdownTabs from "../../DropdownTabs/RadioDropdownTabs";

const tabs = [
  {
    icon: faCalendarAlt,
    text: "Change timespan",
  },
  {
    icon: faCog,
    text: "Settings",
  },
];

const getDropdownTab = (tabNumber, setIsOpen) => {
  switch (tabNumber) {
    case 1:
      return <ChangePortfolioTimespan />;
    case 2:
      return <Settings />;
    case 3:
      return <FilterFundList setIsOpen={setIsOpen} />;
    default:
      return null;
  }
};

const PortfolioDropdownTabs = () => {
  const portfolioFundName = useSelector(
    (state) => getPortfolioFundName(state),
    (newState, prevState) =>
      !(
        (prevState === "" && newState !== "") ||
        (prevState !== "" && newState === "")
      )
  );

  return (
    portfolioFundName !== "" && (
      <DropdownTabs tabs={tabs} getDropdownTab={getDropdownTab} />
    )
  );
};

export default PortfolioDropdownTabs;
