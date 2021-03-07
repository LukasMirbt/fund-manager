import React from "react";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import DropdownTab from "./DropdownTab";

const DropdownTabs = ({ tabs, getDropdownTab, isOpenInitiallyTabNumber }) => {
  return (
    <>
      <List>
        {tabs.map(({ icon, text }, index) => {
          const tabNumber = index + 1;
          return (
            <DropdownTab
              key={text}
              icon={icon}
              text={text}
              tabNumber={tabNumber}
              isOpenInitially={tabNumber === isOpenInitiallyTabNumber}
              getDropdownTab={getDropdownTab}
            />
          );
        })}
      </List>

      <Divider />
    </>
  );
};

export default DropdownTabs;
