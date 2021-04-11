import styled from "styled-components";
import DialogActions from "@material-ui/core/DialogActions";
import CancelButton from "./CancelButton";
import BuyButton from "./BuyButton";

export const StyledDialogActions = styled(DialogActions)`
  justify-content: space-between;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
`;

const Buttons = () => {
  return (
    <StyledDialogActions>
      <CancelButton />
      <BuyButton />
    </StyledDialogActions>
  );
};

export default Buttons;
