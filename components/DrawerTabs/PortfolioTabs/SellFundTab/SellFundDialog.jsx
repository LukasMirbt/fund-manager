import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import Numbers from "./Numbers";
import FundNameAutocomplete from "./FundNameAutocomplete";
import NumberOfSharesSelect from "./NumberOfSharesSelect";
import Buttons from "./Buttons";
import { Column, Title } from "../BuyFundTab/BuyFundDialog";

const SellFundDialog = ({ open, setOpen }) => {
  return (
    <Dialog
      disableBackdropClick
      open={open}
      onClose={() => {
        setOpen(false);
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

      <Buttons setOpen={setOpen} />
    </Dialog>
  );
};

export default SellFundDialog;
