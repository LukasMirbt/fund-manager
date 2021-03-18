import React from "react";
import { useSelector } from "react-redux";
import MainTabs from "./MainTabs";
import RecommendedTabs from "./RecommendedTabs/RecommendedTabs";
import FundListTabs from "./FundListTabs/FundListTabs";
import PortfolioTabs from "./PortfolioTabs/PortfolioTabs";
import { getIsIntroShowing } from "../../redux/selectors";
import { useRouter } from "next/router";

const Tabs = () => {
  const isIntroShowing = useSelector((state) => getIsIntroShowing(state));

  const { pathname } = useRouter();

  return (
    <>
      <MainTabs />

      {pathname === "/" && <FundListTabs />}

      {pathname === "/fund-advisor" && isIntroShowing === false && (
        <RecommendedTabs />
      )}

      {pathname.includes("/portfolio") === true && <PortfolioTabs />}
    </>
  );
};

export default Tabs;
