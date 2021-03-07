import React from "react";
import {
  faCalendarAlt,
  faSearch,
  faCog,
} from "@fortawesome/free-solid-svg-icons";
import FilterFundList from "./FilterFundList";
import Settings from "./Settings";
import SearchTerm from "./SearchTerm";
import DropDownTabs from "../../DropdownTabs/DropdownTabs";
import ChangeFundListTimespan from "./ChangeFundListTimespan";

const tabs = [
  {
    icon: faCalendarAlt,
    text: "Change timespan",
  },
  {
    icon: faCog,
    text: "Settings",
  },
  {
    icon: faSearch,
    text: "Search fund list",
  },
];

const FundListTabs = () => {
  const getDropdownTab = (tabNumber, setIsOpen) => {
    switch (tabNumber) {
      case 1:
        return <ChangeFundListTimespan />;
      case 2:
        return <Settings />;
      case 3:
        return <FilterFundList setIsOpen={setIsOpen} />;
      default:
        return null;
    }
  };

  return (
    <>
      <DropDownTabs tabs={tabs} getDropdownTab={getDropdownTab} />
      <SearchTerm />
    </>
  );
};

export default FundListTabs;
