const getNumberOfSharesAndAcquisitionValue = (
  fundName,
  portfolio,
  xData,
  yData,
  exchangeRate
) => {
  let earliestBuyDate;
  const [shares, acquisitionValue] = portfolio[fundName].reduce(
    (prev, curr, index) => {
      const [shareAccumulator, valueAccumulator] = prev;
      const [sharesBoughtAtBuyDate, buyDate] = curr;

      if (index === 0) {
        earliestBuyDate = buyDate;
      } else if (buyDate < earliestBuyDate) {
        earliestBuyDate = buyDate;
      }

      const buyDateIndex = xData.indexOf(buyDate);
      const NAV = yData[buyDateIndex] / exchangeRate;

      return [
        shareAccumulator + sharesBoughtAtBuyDate,
        valueAccumulator + sharesBoughtAtBuyDate * NAV
      ];
    },
    [0, 0]
  );

  return { shares, acquisitionValue, earliestBuyDate };
};

export default getNumberOfSharesAndAcquisitionValue;
