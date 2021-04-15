import React from "react";
import SellFundDialog from "./SellFundDialog";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { StyledListItem, TabIcon } from "../../MainTabs";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { useDispatch, useSelector } from "react-redux";
import { getIsSellFundDialogOpen } from "../../../../redux/selectors";
import { setIsSellFundDialogOpen } from "../../../../redux/portfolio/actionCreators";

const SellFundTab = () => {
  const isSellFundDialogOpen = useSelector((state) =>
    getIsSellFundDialogOpen(state)
  );

  const dispatch = useDispatch();

  return (
    <>
      <StyledListItem
        data-cy="openSellFundDialogButton"
        button
        selected={isSellFundDialogOpen}
        onClick={() => {
          dispatch(setIsSellFundDialogOpen(true));
        }}
      >
        <ListItemIcon>
          <TabIcon icon={faMinus} />
        </ListItemIcon>

        <ListItemText primary="Sell fund" />
      </StyledListItem>

      <SellFundDialog />
    </>
  );
};

export default SellFundTab;
