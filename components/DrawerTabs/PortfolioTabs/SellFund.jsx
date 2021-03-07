import React, { useState, useMemo } from "react";
import styled from "styled-components";
import { useSelector, useDispatch, batch } from "react-redux";
import Button from "@material-ui/core/Button";
import {
  setData,
  getChartData,
  showNotification,
} from "../../../redux/general/actionCreators";
import { sellFund } from "../../../redux/portfolio/actionCreators";
import { getData, getPortfolio } from "../../../redux/selectors";
import InsetInput from "../../common/styledComponents/InsetInput";
import Autocomplete from "../../common/components/Autocomplete";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";

const Balance = styled.span`
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const StyledButton = styled(Button)`
  color: rgba(255, 255, 255, 0.87);
  background-color: ${({ sc: { isSellButtonDisabled } }) =>
    isSellButtonDisabled ? "rgba(0,0,0,0.26)" : "rgb(30, 155, 0)"};

  :hover {
    background-color: ${({ sc: { isSellButtonDisabled } }) =>
      isSellButtonDisabled ? "rgba(0,0,0,0.26)" : "rgb(26,136,0)"};
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

const dialogTitleID = "sell-dialog-title";

const SellFund = ({ setTabValue }) => {
  const [selectedFund, setSelectedFund] = useState("");
  const [numberOfShares, setNumberOfShares] = useState("");

  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();

  const portfolio = useSelector((state) => getPortfolio(state));
  const data = useSelector((state) => getData(state));

  const options = Object.keys(portfolio);

  const submit = async (fundName, setAutocompleteValue) => {
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
    const { value } = e.target;
    if (
      value >= 0 &&
      value.includes("+") === false &&
      value.includes("-") === false
    ) {
      setNumberOfShares(e.target.value);
    }
  };

  const { sellValue, availableShares } = useMemo(() => {
    if (selectedFund === "") {
      return {
        sellValue: "-",
        availableShares: "-",
      };
    }

    const availableSharesMemo = portfolio[selectedFund].reduce(
      (prev, curr) => prev + curr[0],
      0
    );

    if (numberOfShares === "") {
      return {
        sellValue: "-",
        availableShares: availableSharesMemo,
      };
    }

    const sellValueMemo = (
      numberOfShares *
      data[selectedFund].chartData.yData[
        data[selectedFund].chartData.yData.length - 1
      ]
    ).toFixed(2);

    return {
      sellValue: sellValueMemo,
      availableShares: availableSharesMemo,
    };
  }, [data, numberOfShares, selectedFund, portfolio]);

  const isSellButtonDisabled =
    selectedFund === "" ||
    numberOfShares === undefined ||
    numberOfShares === 0 ||
    numberOfShares === "" ||
    numberOfShares > availableShares;

  const sell = () => {
    batch(() => {
      dispatch(
        sellFund({
          shares: Number(numberOfShares),
          availableShares,
          fundName: selectedFund,
          value:
            data[selectedFund].chartData.yData[
              data[selectedFund].chartData.yData.length - 1
            ] * numberOfShares,
        })
      );

      dispatch(
        showNotification({
          text: `Sold ${numberOfShares} ${
            numberOfShares > 1 ? "shares" : "share"
          } of ${selectedFund}`,
          severity: "success",
        })
      );
    });

    setTabValue(0);
  };

  const buttonOnClick = isSellButtonDisabled ? null : sell;

  return (
    <Dialog
      onClose={() => {
        setIsOpen(false);
      }}
      aria-labelledby={dialogTitleID}
      open={isOpen}
    >
      <Title id={dialogTitleID} variant="h5">
        Sell
      </Title>

      <Autocomplete
        options={options}
        submit={submit}
        placeholder="Fund name"
        initialValue={selectedFund}
        style={{
          marginBottom: "0.5rem",
        }}
      />

      <StyledInsetInput
        type="number"
        value={numberOfShares}
        onChange={onNumberChange}
        placeholder="Number of shares"
      />

      <span>Number of owned shares</span>
      <Balance>{availableShares}</Balance>

      <span>Value (SEK)</span>
      <Balance>{sellValue}</Balance>

      <StyledButton
        sc={{ isSellButtonDisabled }}
        disabled={isSellButtonDisabled}
        onClick={buttonOnClick}
      >
        Sell
      </StyledButton>
    </Dialog>
  );
};

export default SellFund;
