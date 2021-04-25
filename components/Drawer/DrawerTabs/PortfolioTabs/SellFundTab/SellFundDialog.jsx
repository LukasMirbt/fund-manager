import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import Info from "./Info";
import FundNameAutocomplete from "./Inputs/FundNameAutocomplete";
import NumberOfSharesSelect from "./Inputs/NumberOfSharesSelect";
import Buttons from "./Buttons/Buttons";
import { Column, Title } from "../BuyFundTab/BuyFundDialog";
import { useDispatch, useSelector } from "react-redux";
import { getIsSellFundDialogOpen } from "../../../../../redux/selectors";
import {
  setIsSellFundDialogOpen,
  setNumberOfSharesToSell,
  setSelectedFundNameToSell,
} from "../../../../../redux/portfolio/actionCreators";

const SellFundDialog = () => {
  const isSellFundDialogOpen = useSelector((state) =>
    getIsSellFundDialogOpen(state)
  );

  const dispatch = useDispatch();

  return (
    <Dialog
      disableBackdropClick
      open={isSellFundDialogOpen}
      onClose={() => {
        dispatch(setIsSellFundDialogOpen(false));
      }}
      onExited={() => {
        dispatch(setSelectedFundNameToSell(null));
        dispatch(setNumberOfSharesToSell(""));
      }}
      aria-labelledby="sell-fund-dialog-title"
    >
      <Title id="sell-fund-dialog-title">Sell fund</Title>

      <Column>
        <DialogContentText>
          Select which fund and how many shares you would like to sell
        </DialogContentText>

        <FundNameAutocomplete />

        <NumberOfSharesSelect />

        <Info />
      </Column>

      <Buttons />
    </Dialog>
  );
};

export default SellFundDialog;
