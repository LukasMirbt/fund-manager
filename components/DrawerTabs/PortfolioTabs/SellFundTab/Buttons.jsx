import styled from "styled-components";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import { batch, useDispatch, useSelector } from "react-redux";
import {
  getNumberOfSharesToSell,
  getPortfolio,
  getSelectedFundNameToSell,
} from "../../../../redux/selectors";
import {
  setNumberOfSharesToSell,
  setSelectedFundNameToSell,
} from "../../../../redux/portfolio/actionCreators";
import { setIsTemporaryDrawerOpen } from "../../../../redux/general/actionCreators";
import sellFund from "../../../../redux/portfolio/sellFund";

const StyledDialogActions = styled(DialogActions)`
  justify-content: space-between;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
`;

const Buttons = ({ setOpen }) => {
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
    <StyledDialogActions>
      <Button
        onClick={() => {
          setOpen(false);
          dispatch(setNumberOfSharesToSell(""));
          dispatch(setSelectedFundNameToSell(null));
        }}
        color="primary"
      >
        Cancel
      </Button>
      <Button
        variant="contained"
        disabled={isNumberOfSharesValid === false || hasEnoughShares === false}
        onClick={() => {
          dispatch(
            sellFund({
              fundName: selectedFundNameToSell,
              numberOfShares: Number(numberOfSharesToSell),
            })
          );

          setOpen(false);

          batch(() => {
            dispatch(setIsTemporaryDrawerOpen(false));
            dispatch(setNumberOfSharesToSell(""));
            dispatch(setSelectedFundNameToSell(null));
          });
        }}
        color="primary"
      >
        Sell
      </Button>
    </StyledDialogActions>
  );
};

export default Buttons;
