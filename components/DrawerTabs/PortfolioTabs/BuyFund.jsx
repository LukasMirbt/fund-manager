import React, { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch, batch } from "react-redux";
import Button from "@material-ui/core/Button";
import {
  setData,
  getChartData,
  showNotification,
} from "../../../redux/general/actionCreators";
import { buyFund } from "../../../redux/portfolio/actionCreators";
import { getBalance, getData } from "../../../redux/selectors";
import InsetInput from "../../common/styledComponents/InsetInput";
import Autocomplete from "../../common/components/Autocomplete";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";

export const Container = styled.div`
  z-index: 1400;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  height: min-content;
  margin: auto;
  border-radius: 4px;
  padding: 1.5rem;
  width: min-content;
  background-color: white;
  box-shadow: ${({ theme: { shadows } }) => shadows[2]};
  display: flex;
  flex-direction: column;
`;

const Balance = styled.span`
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const StyledButton = styled(Button)`
  color: rgba(255, 255, 255, 0.87);
  background-color: ${({ sc: { isBuyButtonDisabled } }) =>
    isBuyButtonDisabled ? "rgba(0,0,0,0.26)" : "rgb(30, 155, 0)"};

  :hover {
    background-color: ${({ sc: { isBuyButtonDisabled } }) =>
      isBuyButtonDisabled ? "rgba(0,0,0,0.26)" : "rgb(26,136,0)"};
  }
`;

const StyledInsetInput = styled(InsetInput)`
  margin-bottom: 0.5rem;
  text-align: start;
  ::placeholder {
    text-align: center;
  }
`;

const Title = styled(DialogTitle)`
  margin-bottom: 0.5rem;
`;

const dialogTitleID = "buy-dialog-title";

const BuyFund = ({ setTabValue }) => {
  const [selectedFund, setSelectedFund] = useState("");
  const [numberOfShares, setNumberOfShares] = useState("");

  const [isOpen, setIsOpen] = useState(false);

  const balance = useSelector((state) => getBalance(state));
  const data = useSelector((state) => getData(state));

  const options = Object.keys(data);

  const dispatch = useDispatch();

  const cost = (() => {
    if (
      selectedFund === "" ||
      numberOfShares === "" ||
      numberOfShares[0] === "0" ||
      numberOfShares % 1 !== 0
    ) {
      return "-";
    }
    return (
      numberOfShares *
      data[selectedFund].chartData.yData[
        data[selectedFund].chartData.yData.length - 1
      ]
    ).toFixed(2);
  })();

  const remainingBalance =
    cost === "-" ? balance.toFixed(2) : (balance - cost).toFixed(2);

  const isBuyButtonDisabled =
    selectedFund === "" ||
    numberOfShares === undefined ||
    numberOfShares[0] === "0" ||
    numberOfShares === "" ||
    numberOfShares % 1 !== 0 ||
    remainingBalance < 0;

  const buy = () => {
    batch(() => {
      dispatch(
        buyFund({
          shares: Number(numberOfShares),
          fundName: selectedFund,
          buyDate:
            data[selectedFund].chartData.xData[
              data[selectedFund].chartData.xData.length - 1
            ],
          NAV:
            data[selectedFund].chartData.yData[
              data[selectedFund].chartData.yData.length - 1
            ],
        })
      );

      dispatch(
        showNotification({
          text: `Bought ${numberOfShares} ${
            numberOfShares > 1 ? "shares" : "share"
          } of ${selectedFund}`,
          severity: "success",
        })
      );
    });

    setTabValue(0);
  };

  const buttonOnClick = isBuyButtonDisabled === false ? buy : null;

  const setFund = async (fundName, setAutocompleteValue) => {
    setAutocompleteValue(fundName);
    if (data[fundName].chartData === undefined) {
      const chartData = await getChartData(fundName);
      const newData = { ...data };
      newData[fundName].chartData = chartData;
      dispatch(setData(newData));
    }
    setSelectedFund(fundName);
  };

  const onNumberChange = (e) => {
    if (e.target.value >= 0) {
      setNumberOfShares(e.target.value);
    }
  };

  return (
    <Dialog
      onClose={() => {
        setIsOpen(false);
      }}
      aria-labelledby={dialogTitleID}
      open={isOpen}
    >
      <Title id={dialogTitleID} variant="h5">
        Buy
      </Title>
      <Autocomplete
        options={options}
        setValue={setSelectedFund}
        initialValue={selectedFund}
        placeholder="Fund name"
        submit={setFund}
        style={{
          marginBottom: "0.5rem",
        }}
      />

      <StyledInsetInput
        type="number"
        placeholder="Number of shares"
        value={numberOfShares}
        onChange={onNumberChange}
      />

      <span>Cost (SEK)</span>
      <Balance>{cost}</Balance>

      <span>Available balance (SEK)</span>
      <Balance>{balance.toFixed(2)}</Balance>

      <span>Remaining balance (SEK)</span>
      <Balance>{remainingBalance}</Balance>

      <StyledButton disabled={isBuyButtonDisabled} onClick={buttonOnClick}>
        Buy
      </StyledButton>
    </Dialog>
  );
};

export default BuyFund;
