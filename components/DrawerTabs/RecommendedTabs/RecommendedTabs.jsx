import React from "react";
import {
  faCalendarAlt,
  faCog,
  faUserGraduate,
} from "@fortawesome/free-solid-svg-icons";
import Settings from "../FundListTabs/Settings";
import DropdownTabs from "../../DropdownTabs/DropdownTabs";
import CategoryTabs from "../../FundAdvisor/CategoryTabs";
import BuySellTabs from "../PortfolioTabs/BuySellTabs";
import ChangeRecommendedTimespan from "./ChangeRecommendedTimespan";

const tabs = [
  {
    icon: faUserGraduate,
    text: "Recommendations",
  },
  {
    icon: faCalendarAlt,
    text: "Change timespan",
  },
  {
    icon: faCog,
    text: "Settings",
  },
];

const getDropdownTab = (tabNumber) => {
  switch (tabNumber) {
    case 1:
      return <CategoryTabs />;
    case 2:
      return <ChangeRecommendedTimespan />;
    case 3:
      return <Settings hideTableSetting />;
    default:
      return null;
  }
};

const RecommendedTabs = () => {
  return (
    <>
      <DropdownTabs
        tabs={tabs}
        getDropdownTab={getDropdownTab}
        isOpenInitiallyTabNumber={1}
      />

      <BuySellTabs />
    </>
  );
};

export default RecommendedTabs;
