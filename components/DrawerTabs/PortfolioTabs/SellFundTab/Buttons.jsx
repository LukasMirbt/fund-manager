import styled from "styled-components";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import { useDispatch, useSelector } from "react-redux";
import {
  getBalance,
  getData,
  getNumberOfSharesToSell,
  getSelectedFundNameToSell,
} from "../../../../redux/selectors";
import {
  sellFund,
  setNumberOfSharesToSell,
  setSelectedFundNameToSell,
} from "../../../../redux/portfolio/actionCreators";
import { showNotification } from "../../../../redux/general/actionCreators";

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

  const data = useSelector((state) => getData(state));

  const balance = useSelector((state) => getBalance(state));

  const dispatch = useDispatch();

  const isNumberOfSharesValid =
    numberOfSharesToSell !== "" &&
    //this regExp only allows numbers with one decimal
    /(^0\.5$)|(^[1-9][0-9]*(\.[0123456789])?$)/.test(numberOfSharesToSell) &&
    numberOfSharesToSell[0] !== "0";

  let hasSufficientFunds = true;

  if (selectedFundNameToSell !== null && isNumberOfSharesValid === true) {
    const { yData } = data[selectedFundNameToSell].chartData;
    const cost = yData[yData.length - 1] * numberOfSharesToSell;
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
          dispatch(setNumberOfSharesToSell(""));
          dispatch(setSelectedFundNameToSell(null));
        }}
        color="primary"
      >
        Cancel
      </Button>
      <Button
        disabled={
          selectedFundNameToSell === "" ||
          isNumberOfSharesValid === false ||
          hasSufficientFunds === false
        }
        onClick={() => {
          const { xData, yData } = data[selectedFundNameToSell].chartData;

          dispatch(
            sellFund({
              shares: numberOfSharesToSell,
              fundName: selectedFundNameToSell,
              sellDate: xData[xData.length - 1],
              NAV: yData[yData.length - 1],
            })
          );

          dispatch(
            showNotification({
              text: `Sold ${numberOfSharesToSell} ${
                numberOfSharesToSell > 1 ? "shares" : "share"
              } of ${selectedFundNameToSell}`,
              severity: "success",
            })
          );

          setOpen(false);

          dispatch(setNumberOfSharesToSell(""));
          dispatch(setSelectedFundNameToSell(null));
        }}
        color="primary"
      >
        Sell
      </Button>
    </StyledDialogActions>
  );
};

export default Buttons;
