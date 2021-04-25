import CancelButton from "./CancelButton";
import SellButton from "./SellButton";
import { StyledDialogActions } from "../../BuyFundTab/Buttons/Buttons";

const Buttons = () => {
  return (
    <StyledDialogActions>
      <CancelButton />
      <SellButton />
    </StyledDialogActions>
  );
};

export default Buttons;
