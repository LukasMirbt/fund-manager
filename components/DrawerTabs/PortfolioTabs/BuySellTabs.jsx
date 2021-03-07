import React, { useState } from "react";
import { useSelector } from "react-redux";
import List from "@material-ui/core/List";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { getPortfolioFundName } from "../../../redux/selectors";
import BuyFund from "./BuyFund";
import SellFund from "./SellFund";
import { StyledDropdownTab, TabIcon } from "../../DropdownTabs/DropdownTab";

const tabs = [
  {
    icon: faChevronRight,
    text: "Buy fund",
  },
  {
    icon: faChevronLeft,
    text: "Sell fund",
  },
];

const SellFundTab = ({ tabValue, tabNumber, onTabClick, setTabValue }) => {
  const { icon, text } = tabs[tabNumber - 1];
  const portfolioFundName = useSelector(
    (state) => getPortfolioFundName(state),
    (newState, prevState) =>
      !(
        (prevState === "" && newState !== "") ||
        (prevState !== "" && newState === "")
      )
  );

  return (
    portfolioFundName !== "" && (
      <>
        <StyledDropdownTab
          sc={{ tabValue, tabNumber }}
          button
          onClick={onTabClick(tabNumber)}
        >
          <ListItemIcon>
            <TabIcon icon={icon} />
          </ListItemIcon>

          <ListItemText primary={text} />
        </StyledDropdownTab>

        {tabValue === tabNumber && <SellFund setTabValue={setTabValue} />}
      </>
    )
  );
};

const BuyFundTab = ({ tabValue, tabNumber, onTabClick, setTabValue }) => {
  const { icon, text } = tabs[tabNumber - 1];

  return (
    <>
      <StyledDropdownTab
        sc={{ tabValue, tabNumber }}
        button
        onClick={onTabClick(tabNumber)}
      >
        <ListItemIcon>
          <TabIcon icon={icon} />
        </ListItemIcon>

        <ListItemText primary={text} />
      </StyledDropdownTab>

      {tabValue === tabNumber && <BuyFund setTabValue={setTabValue} />}
    </>
  );
};

const BuySellTabs = () => {
  const [tabValue, setTabValue] = useState(0);

  const onTabClick = (tabNumber) => () => {
    if (tabValue === tabNumber) {
      setTabValue(0);
    } else {
      setTabValue(tabNumber);
    }
  };

  return (
    <>
      <List>
        <BuyFundTab
          setTabValue={setTabValue}
          tabValue={tabValue}
          tabNumber={1}
          onTabClick={onTabClick}
        />
        <SellFundTab
          setTabValue={setTabValue}
          tabValue={tabValue}
          tabNumber={2}
          onTabClick={onTabClick}
        />
      </List>

      <Divider />
    </>
  );
};

export default BuySellTabs;
