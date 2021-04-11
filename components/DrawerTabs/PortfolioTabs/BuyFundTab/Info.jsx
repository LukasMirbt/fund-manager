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

const Cost = styled(Typography)`
  font-weight: bold;
`;

const Info = () => {
  const selectedFundNameToBuy = useSelector((state) =>
    getSelectedFundNameToBuy(state)
  );

  const numberOfSharesToBuy = useSelector((state) =>
    getNumberOfSharesToBuy(state)
  );

  const data = useSelector((state) => getData(state));

  const balance = useSelector((state) => getBalance(state));

  const exchangeRates = useSelector((state) => getExchangeRates(state));

  let cost = " - ";
  let remainingBalance = " - ";

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
      <Balance
        variant="subtitle1"
        component="p"
      >{`Current balance: ${balance.toFixed(2)} SEK`}</Balance>

      <Cost variant="subtitle1" component="p">{`Cost: ${cost}`}</Cost>

      <RemainingBalance
        variant="subtitle1"
        component="p"
      >{`Remaining balance: ${remainingBalance}`}</RemainingBalance>
    </>
  );
};

export default Info;
