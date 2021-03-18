import React from "react";
import { faCalendarAlt, faCog } from "@fortawesome/free-solid-svg-icons";
import Settings from "../Settings";
import DropDownTabs from "../DropdownTabs";
import ChangeTimespan from "../ChangeTimespan";

const tabs = [
  {
    icon: faCalendarAlt,
    text: "Change timespan",
    component: <ChangeTimespan />,
  },
  {
    icon: faCog,
    text: "Settings",
    component: <Settings />,
  },
  /*   {
    icon: faSearch,
    text: "Search fund list",
    component: <FilterFundList index={2} />,
  }, */
];

const FundListTabs = () => {
  return (
    <>
      <DropDownTabs tabs={tabs} />
    </>
  );
};

export default FundListTabs;
