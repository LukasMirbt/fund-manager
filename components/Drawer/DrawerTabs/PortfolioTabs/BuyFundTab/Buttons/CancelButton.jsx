import Button from "@material-ui/core/Button";
import { useDispatch } from "react-redux";
import { setIsBuyFundDialogOpen } from "../../../../../../redux/portfolio/actionCreators";

const CancelButton = () => {
  const dispatch = useDispatch();

  return (
    <Button
      onClick={() => {
        dispatch(setIsBuyFundDialogOpen(false));
      }}
      color="primary"
    >
      Cancel
    </Button>
  );
};

export default CancelButton;
