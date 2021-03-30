import React, { useState } from "react";
import BuyFundDialog from "./BuyFundDialog";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { StyledListItem, TabIcon } from "../../MainTabs";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

const BuyFundsTab = () => {
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
          <TabIcon icon={faPlus} />
        </ListItemIcon>

        <ListItemText primary="Buy fund" />
      </StyledListItem>

      <BuyFundDialog open={open} setOpen={setOpen} />
    </>
  );
};

export default BuyFundsTab;
