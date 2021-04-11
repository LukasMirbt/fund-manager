import Button from "@material-ui/core/Button";
import { batch, useDispatch, useSelector } from "react-redux";
import {
  getBalance,
  getData,
  getNumberOfSharesToBuy,
  getSelectedFundNameToBuy,
} from "../../../../../redux/selectors";
import { setIsBuyFundDialogOpen } from "../../../../../redux/portfolio/actionCreators";
import buyFund from "../../../../../redux/portfolio/buyFund";
import { setIsTemporaryDrawerOpen } from "../../../../../redux/general/actionCreators";

const BuyButton = () => {
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

  let hasSufficientFunds = false;

  if (selectedFundNameToBuy !== null && isNumberOfSharesValid === true) {
    const { yData } = data[selectedFundNameToBuy].chartData;
    const cost = yData[yData.length - 1] * numberOfSharesToBuy;
    const remainingBalance = balance - cost;

    if (remainingBalance >= 0) {
      hasSufficientFunds = true;
    }
  }

  return (
    <Button
      variant="contained"
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

        batch(() => {
          dispatch(setIsBuyFundDialogOpen(false));
          dispatch(setIsTemporaryDrawerOpen(false));
        });
      }}
      color="primary"
    >
      Buy
    </Button>
  );
};

export default BuyButton;
