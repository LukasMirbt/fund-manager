import React from "react";
import { useSelector } from "react-redux";
import MainTabs from "./MainTabs";
import PortfolioTabs from "./PortfolioTabs/PortfolioTabs";
import { getCredentials } from "../../../redux/selectors";
import { useRouter } from "next/router";
import SettingsTabs from "./SettingsTabs";

const DrawerTabs = () => {
  const { pathname } = useRouter();

  const credentials = useSelector((state) => getCredentials(state));

  return (
    <>
      <MainTabs />

      {pathname === "/portfolio" && <PortfolioTabs />}

      {(pathname !== "/portfolio" || credentials.token !== undefined) &&
        pathname !== "/" && <SettingsTabs />}
    </>
  );
};

export default DrawerTabs;
