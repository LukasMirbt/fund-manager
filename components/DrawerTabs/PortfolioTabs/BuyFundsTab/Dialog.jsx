import styled from "styled-components";
import DialogContent from "@material-ui/core/DialogContent";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContentText from "@material-ui/core/DialogContentText";
import Numbers from "./Numbers";
import FundNameAutocomplete from "./FundNameAutocomplete";
import NumberOfSharesSelect from "./NumberOfSharesSelect";
import Buttons from "./Buttons";

const Column = styled(DialogContent)`
  display: flex;
  flex-direction: column;
`;

const BuyFundsDialog = ({ open, setOpen }) => {
  return (
    <Dialog
      disableBackdropClick
      open={open}
      onClose={() => {
        setOpen(false);
      }}
      aria-labelledby="buy-funds-dialog-title"
    >
      <DialogTitle id="buy-funds-dialog-title">Buy funds</DialogTitle>

      <Column>
        <DialogContentText>
          To subscribe to this website, please enter your email address here. We
          will send updates occasionally.
        </DialogContentText>

        <FundNameAutocomplete />

        <NumberOfSharesSelect />

        <Numbers />
      </Column>

      <Buttons setOpen={setOpen} />
    </Dialog>
  );
};

export default BuyFundsDialog;
