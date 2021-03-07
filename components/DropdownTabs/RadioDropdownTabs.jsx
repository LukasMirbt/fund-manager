import React, { useState } from "react";
import List from "@material-ui/core/List";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import styled, { css } from "styled-components";
import { StyledDropdownTab, TabIcon } from "./DropdownTab";

const Tab = styled(StyledDropdownTab)`
  padding-left: 1.5rem;
  ${({ sc: { tabValue, tabNumber } }) =>
    tabValue === tabNumber &&
    css`
      /* margin-bottom: 1rem; */
      background-color: rgba(0, 0, 0, 0.12);
      &:hover {
        background-color: rgba(0, 0, 0, 0.16);
      }
    `}
`;

const DropDownTabs = ({ tabs, getDropdownTab, initialTabValue = 0 }) => {
  const [tabValue, setTabValue] = useState(initialTabValue);

  return (
    <>
      <List>
        {tabs.map(({ icon, text }, index) => {
          const tabNumber = index + 1;
          return (
            <React.Fragment key={text}>
              <Tab
                sc={{ tabValue, tabNumber }}
                button
                onClick={() => {
                  if (tabValue === tabNumber) {
                    setTabValue(0);
                  } else {
                    setTabValue(tabNumber);
                  }
                }}
              >
                <ListItemIcon>
                  <TabIcon icon={icon} />
                </ListItemIcon>

                <ListItemText primary={text} />
              </Tab>

              {tabValue === tabNumber && getDropdownTab(tabNumber, setTabValue)}
            </React.Fragment>
          );
        })}
      </List>

      <Divider />
    </>
  );
};

export default DropDownTabs;
