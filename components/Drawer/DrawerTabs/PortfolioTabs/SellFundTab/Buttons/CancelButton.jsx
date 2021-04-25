import Button from "@material-ui/core/Button";
import { useDispatch } from "react-redux";
import { setIsSellFundDialogOpen } from "../../../../../../redux/portfolio/actionCreators";

const CancelButton = () => {
  const dispatch = useDispatch();

  return (
    <Button
      onClick={() => {
        dispatch(setIsSellFundDialogOpen(false));
      }}
      color="primary"
    >
      Cancel
    </Button>
  );
};

export default CancelButton;
