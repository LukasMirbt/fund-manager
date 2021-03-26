import styled from "styled-components";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import { batch, useDispatch, useSelector } from "react-redux";
import {
  getBalance,
  getData,
  getNumberOfSharesToBuy,
  getSelectedFundNameToBuy,
} from "../../../../redux/selectors";
import {
  setNumberOfSharesToBuy,
  setSelectedFundNameToBuy,
} from "../../../../redux/portfolio/actionCreators";
import buyFund from "../../../../redux/portfolio/buyFund";
import { setIsTemporaryDrawerOpen } from "../../../../redux/general/actionCreators";

const StyledDialogActions = styled(DialogActions)`
  justify-content: space-between;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
`;

const Buttons = ({ setOpen }) => {
  const numberOfSharesToBuy = useSelector((state) =>
    getNumberOfSharesToBuy(state)
  );

  const selectedFundNameToBuy = useSelector((state) =>
    getSelectedFundNameToBuy(state)
  );

  const data = useSelector((state) => getData(state));

  const balance = useSelector((state) => getBalance(state));

  const dispatch = useDispatch();

  const isNumberOfSharesValid =
    numberOfSharesToBuy !== "" &&
    //this regExp only allows numbers with one decimal
    /(^0\.5$)|(^[1-9][0-9]*(\.[0123456789])?$)/.test(numberOfSharesToBuy) &&
    numberOfSharesToBuy[0] !== "0";

  let hasSufficientFunds = true;

  if (selectedFundNameToBuy !== null && isNumberOfSharesValid === true) {
    const { yData } = data[selectedFundNameToBuy].chartData;
    const cost = yData[yData.length - 1] * numberOfSharesToBuy;
    const remainingBalance = balance - cost;

    if (remainingBalance < 0) {
      hasSufficientFunds = false;
    }
  }

  return (
    <StyledDialogActions>
      <Button
        onClick={() => {
          setOpen(false);
          dispatch(setNumberOfSharesToBuy(""));
          dispatch(setSelectedFundNameToBuy(null));
        }}
        color="primary"
      >
        Cancel
      </Button>
      <Button
        disabled={
          selectedFundNameToBuy === "" ||
          isNumberOfSharesValid === false ||
          hasSufficientFunds === false
        }
        onClick={() => {
          dispatch(
            buyFund({
              fundName: selectedFundNameToBuy,
              numberOfShares: Number(numberOfSharesToBuy),
            })
          );

          setOpen(false);

          batch(() => {
            dispatch(setIsTemporaryDrawerOpen(false));
            dispatch(setNumberOfSharesToBuy(""));
            dispatch(setSelectedFundNameToBuy(null));
          });
        }}
        color="primary"
      >
        Buy
      </Button>
    </StyledDialogActions>
  );
};

export default Buttons;
