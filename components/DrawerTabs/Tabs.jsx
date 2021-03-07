import React from "react";
import { useSelector } from "react-redux";
import MainTabs from "./MainTabs";
import RecommendedTabs from "./RecommendedTabs/RecommendedTabs";
import FundListTabs from "./FundListTabs/FundListTabs";
import PortfolioTabs from "./PortfolioTabs/PortfolioTabs";
import { getIsRecommendedIntroShowing } from "../../redux/selectors";
import { useRouter } from "next/router";

const Tabs = () => {
  const isRecommendedIntroShowing = useSelector((state) =>
    getIsRecommendedIntroShowing(state)
  );

  const { pathname } = useRouter();

  return (
    <>
      <MainTabs />

      {pathname === "/" && <FundListTabs />}

      {pathname === "/fund-advisor" && isRecommendedIntroShowing === false && (
        <RecommendedTabs />
      )}

      {pathname.includes("/portfolio") === true && <PortfolioTabs />}
    </>
  );
};

export default Tabs;
