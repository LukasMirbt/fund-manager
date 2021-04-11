import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import {
  getData,
  getExchangeRates,
  getNumberOfSharesToSell,
  getPortfolio,
  getSelectedFundNameToSell,
} from "../../../../redux/selectors";
import Typography from "@material-ui/core/Typography";
import adjustValueByCurrency from "../adjustValueByCurrency";

const Value = styled(Typography)`
  font-weight: bold;
`;

const Shares = styled(Typography)``;

const Info = () => {
  const selectedFundNameToSell = useSelector((state) =>
    getSelectedFundNameToSell(state)
  );

  const numberOfSharesToSell = useSelector((state) =>
    getNumberOfSharesToSell(state)
  );

  const data = useSelector((state) => getData(state));

  const portfolio = useSelector((state) => getPortfolio(state));

  const exchangeRates = useSelector((state) => getExchangeRates(state));

  let sellValue = " - ";

  if (selectedFundNameToSell !== null && numberOfSharesToSell !== "") {
    const { yData } = data[selectedFundNameToSell].chartData;

    sellValue = `${adjustValueByCurrency({
      fundName: selectedFundNameToSell,
      value: yData[yData.length - 1] * numberOfSharesToSell,
      exchangeRates,
    }).toFixed(2)} SEK`;
  }

  let currentNumberOfShares = " - ";

  if (selectedFundNameToSell !== null) {
    currentNumberOfShares = portfolio[selectedFundNameToSell].shares;
  }

  return (
    <>
      <Shares
        variant="subtitle1"
        component="p"
      >{`Current number of shares: ${currentNumberOfShares}`}</Shares>
      <Value variant="subtitle1" component="p">{`Value: ${sellValue}`}</Value>
    </>
  );
};

export default Info;
