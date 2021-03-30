import React, { useState } from "react";
import SellFundDialog from "./SellFundDialog";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { StyledListItem, TabIcon } from "../../MainTabs";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

const SellFundTab = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <StyledListItem
        button
        selected={open}
        onClick={() => {
          setOpen(true);
        }}
      >
        <ListItemIcon>
          <TabIcon icon={faMinus} />
        </ListItemIcon>

        <ListItemText primary="Sell fund" />
      </StyledListItem>

      <SellFundDialog open={open} setOpen={setOpen} />
    </>
  );
};

export default SellFundTab;
