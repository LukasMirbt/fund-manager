import React from "react";
import { useSelector } from "react-redux";
import { getCredentials } from "../../../redux/selectors";
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

const PortfolioTabs = () => {
  const credentials = useSelector((state) => getCredentials(state));
  return credentials.token !== undefined ? <DropdownTabs tabs={tabs} /> : null;
};

export default PortfolioTabs;
