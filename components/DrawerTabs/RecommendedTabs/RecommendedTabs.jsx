import React from "react";
import { faCalendarAlt, faCog } from "@fortawesome/free-solid-svg-icons";
import Settings from "../Settings";
import DropdownTabs from "../DropdownTabs";
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
];

const RecommendedTabs = () => {
  return <DropdownTabs tabs={tabs} />;
};

export default RecommendedTabs;
