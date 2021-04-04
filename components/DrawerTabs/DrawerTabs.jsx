import React from "react";
import { useSelector } from "react-redux";
import MainTabs from "./MainTabs";
import PortfolioTabs from "./PortfolioTabs/PortfolioTabs";
import { getCredentials, getIsIntroShowing } from "../../redux/selectors";
import { useRouter } from "next/router";
import SettingsTabs from "./SettingsTabs";

const Tabs = () => {
  const isIntroShowing = useSelector((state) => getIsIntroShowing(state));

  const { pathname } = useRouter();

  const credentials = useSelector((state) => getCredentials(state));

  return (
    <>
      <MainTabs />

      {pathname === "/portfolio" && <PortfolioTabs />}

      {(pathname !== "/fund-advisor" || isIntroShowing === false) &&
        (pathname !== "/portfolio" || credentials.token !== undefined) && (
          <SettingsTabs />
        )}
    </>
  );
};

export default Tabs;
