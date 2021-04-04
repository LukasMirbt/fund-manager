import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import {
  getBalance,
  getData,
  getExchangeRates,
  getNumberOfSharesToBuy,
  getSelectedFundNameToBuy,
} from "../../../../redux/selectors";
import Typography from "@material-ui/core/Typography";
import adjustValueByCurrency from "../adjustValueByCurrency";
const Balance = styled(Typography)``;

const RemainingBalance = styled(Typography)``;

const Cost = styled(Typography)``;

const Numbers = () => {
  const selectedFundNameToBuy = useSelector((state) =>
    getSelectedFundNameToBuy(state)
  );

  const numberOfSharesToBuy = useSelector((state) =>
    getNumberOfSharesToBuy(state)
  );

  const data = useSelector((state) => getData(state));

  const balance = useSelector((state) => getBalance(state));

  const exchangeRates = useSelector((state) => getExchangeRates(state));

  let cost = "-";
  let remainingBalance = "-";

  if (selectedFundNameToBuy !== null && numberOfSharesToBuy !== 0) {
    const { yData } = data[selectedFundNameToBuy].chartData;
    cost = yData[yData.length - 1] * numberOfSharesToBuy;

    cost = adjustValueByCurrency({
      fundName: selectedFundNameToBuy,
      value: cost,
      exchangeRates,
    });

    remainingBalance = balance - cost;

    cost = `${cost.toFixed(2)} SEK`;
    remainingBalance = `${remainingBalance.toFixed(2)} SEK`;
  }

  return (
    <>
      <Balance>{`Current balance: ${balance} SEK`}</Balance>
      <Cost>{`Cost: ${cost}`}</Cost>
      <RemainingBalance>{`Remaining balance: ${remainingBalance}`}</RemainingBalance>
    </>
  );
};

export default Numbers;
