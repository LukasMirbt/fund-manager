import styled from "styled-components";
import DialogContent from "@material-ui/core/DialogContent";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContentText from "@material-ui/core/DialogContentText";
import Numbers from "./Numbers";
import FundNameAutocomplete from "./FundNameAutocomplete";
import NumberOfSharesSelect from "./NumberOfSharesSelect";
import Buttons from "./Buttons";

export const Column = styled(DialogContent)`
  display: flex;
  flex-direction: column;
`;

export const Title = styled(DialogTitle)`
  padding-bottom: 0;
`;

const BuyFundDialog = ({ open, setOpen }) => {
  return (
    <Dialog
      disableBackdropClick
      open={open}
      onClose={() => {
        setOpen(false);
      }}
      aria-labelledby="buy-fund-dialog-title"
    >
      <Title id="buy-fund-dialog-title">Buy fund</Title>

      <Column>
        <DialogContentText>
          Select which fund and how many shares you would like to buy
        </DialogContentText>

        <FundNameAutocomplete />

        <NumberOfSharesSelect />

        <Numbers />
      </Column>

      <Buttons setOpen={setOpen} />
    </Dialog>
  );
};

export default BuyFundDialog;
