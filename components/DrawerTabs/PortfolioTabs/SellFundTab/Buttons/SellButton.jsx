import Button from "@material-ui/core/Button";
import { batch, useDispatch, useSelector } from "react-redux";
import {
  getNumberOfSharesToSell,
  getPortfolio,
  getSelectedFundNameToSell,
} from "../../../../../redux/selectors";
import { setIsSellFundDialogOpen } from "../../../../../redux/portfolio/actionCreators";
import { setIsTemporaryDrawerOpen } from "../../../../../redux/general/actionCreators";
import sellFund from "../../../../../redux/portfolio/sellFund";

const SellButton = () => {
  const numberOfSharesToSell = useSelector((state) =>
    getNumberOfSharesToSell(state)
  );

  const selectedFundNameToSell = useSelector((state) =>
    getSelectedFundNameToSell(state)
  );

  const portfolio = useSelector((state) => getPortfolio(state));

  const dispatch = useDispatch();

  const isNumberOfSharesValid =
    numberOfSharesToSell !== "" &&
    //this regExp only allows numbers with one decimal
    /(^0\.5$)|(^[1-9][0-9]*(\.[0123456789])?$)/.test(numberOfSharesToSell) &&
    numberOfSharesToSell[0] !== "0";

  const hasEnoughShares =
    selectedFundNameToSell !== null &&
    isNumberOfSharesValid === true &&
    portfolio[selectedFundNameToSell] !== undefined &&
    portfolio[selectedFundNameToSell].shares >= numberOfSharesToSell;

  return (
    <Button
      data-cy="sellFundButton"
      variant="contained"
      disabled={isNumberOfSharesValid === false || hasEnoughShares === false}
      onClick={() => {
        dispatch(
          sellFund({
            fundName: selectedFundNameToSell,
            numberOfShares: Number(numberOfSharesToSell),
          })
        );

        batch(() => {
          dispatch(setIsSellFundDialogOpen(false));
          dispatch(setIsTemporaryDrawerOpen(false));
        });
      }}
      color="primary"
    >
      Sell
    </Button>
  );
};

export default SellButton;
