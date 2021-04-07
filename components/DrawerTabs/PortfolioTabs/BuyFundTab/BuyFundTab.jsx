import React from "react";
import BuyFundDialog from "./BuyFundDialog";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { StyledListItem, TabIcon } from "../../MainTabs";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { useDispatch, useSelector } from "react-redux";
import { getIsBuyFundDialogOpen } from "../../../../redux/selectors";
import { setIsBuyFundDialogOpen } from "../../../../redux/portfolio/actionCreators";

const BuyFundsTab = () => {
  const isBuyFundDialogOpen = useSelector((state) =>
    getIsBuyFundDialogOpen(state)
  );

  const dispatch = useDispatch();

  return (
    <>
      <StyledListItem
        button
        selected={isBuyFundDialogOpen}
        onClick={() => {
          dispatch(setIsBuyFundDialogOpen(true));
        }}
      >
        <ListItemIcon>
          <TabIcon icon={faPlus} />
        </ListItemIcon>

        <ListItemText primary="Buy fund" />
      </StyledListItem>

      <BuyFundDialog />
    </>
  );
};

export default BuyFundsTab;
