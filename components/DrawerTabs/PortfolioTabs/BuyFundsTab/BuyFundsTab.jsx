import React, { useState } from "react";
import Dialog from "./Dialog";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { StyledListItem, TabIcon } from "../../DropdownTabs";
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

        <ListItemText primary="Buy funds" />
      </StyledListItem>

      <Dialog open={open} setOpen={setOpen} />
    </>
  );
};

export default BuyFundsTab;
