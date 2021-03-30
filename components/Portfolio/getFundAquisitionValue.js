const getFundAcquisitionValue = (fundInfo) => {
  let totalBuyHistoryAcquisitionValue = 0;
  let totalNumberOfSoldShares = 0;
  let totalNumberOfBoughtShares = 0;

  const { buyHistory } = fundInfo;

  buyHistory.forEach(({ acquisitionValue, numberOfBoughtShares }) => {
    totalBuyHistoryAcquisitionValue += acquisitionValue;
    totalNumberOfBoughtShares += numberOfBoughtShares;
  });

  if (fundInfo.sellHistory !== undefined) {
    fundInfo.sellHistory.forEach(({ numberOfSoldShares }) => {
      totalNumberOfSoldShares += numberOfSoldShares;
    });
  }

  const averageAcquisitionValue =
    totalBuyHistoryAcquisitionValue / totalNumberOfBoughtShares;

  const totalFundAcquisitionValue =
    totalBuyHistoryAcquisitionValue -
    totalNumberOfSoldShares * averageAcquisitionValue;

  return totalFundAcquisitionValue;
};

export default getFundAcquisitionValue;
