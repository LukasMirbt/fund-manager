import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import {
  getBalance,
  getData,
  getNumberOfSharesToBuy,
  getSelectedFundNameToBuy,
} from "../../../../redux/selectors";
import Typography from "@material-ui/core/Typography";
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

  let cost = "-";
  let remainingBalance = "-";

  if (selectedFundNameToBuy !== null && numberOfSharesToBuy !== null) {
    const { yData } = data[selectedFundNameToBuy].chartData;
    cost = (yData[yData.length - 1] * numberOfSharesToBuy).toFixed(2);
    remainingBalance = (balance - cost).toFixed(2);
  }

  return (
    <>
      <Balance>{`Current balance: ${balance.toFixed(2)}`}</Balance>
      <Cost>{`Cost: ${cost}`}</Cost>
      <RemainingBalance>{`Remaining balance: ${remainingBalance}`}</RemainingBalance>
    </>
  );
};

export default Numbers;
