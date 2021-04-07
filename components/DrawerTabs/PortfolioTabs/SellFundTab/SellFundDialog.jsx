import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import Numbers from "./Numbers";
import FundNameAutocomplete from "./FundNameAutocomplete";
import NumberOfSharesSelect from "./NumberOfSharesSelect";
import Buttons from "./Buttons";
import { Column, Title } from "../BuyFundTab/BuyFundDialog";
import { useDispatch, useSelector } from "react-redux";
import { getIsSellFundDialogOpen } from "../../../../redux/selectors";
import { setIsSellFundDialogOpen } from "../../../../redux/portfolio/actionCreators";

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
      aria-labelledby="sell-fund-dialog-title"
    >
      <Title id="sell-fund-dialog-title">Sell fund</Title>

      <Column>
        <DialogContentText>
          Select which fund and how many shares you would like to sell
        </DialogContentText>

        <FundNameAutocomplete />

        <NumberOfSharesSelect />

        <Numbers />
      </Column>

      <Buttons
        setOpen={(isOpen) => {
          dispatch(setIsSellFundDialogOpen(isOpen));
        }}
      />
    </Dialog>
  );
};

export default SellFundDialog;
