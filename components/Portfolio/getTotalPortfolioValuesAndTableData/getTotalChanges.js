const getTotalChanges = (
  changeKeys,
  changes,
  currentTotalValue,
  acquisitionTotalValue
) => {
  const totalChanges = {
    acqValue: acquisitionTotalValue,
    value: currentTotalValue
  };

  changeKeys.forEach(key => {
    totalChanges[key] = 0;
  });

  Object.keys(changes).forEach(fundName => {
    changeKeys.forEach(key => {
      totalChanges[key] += changes[fundName][key];
    });
  });

  changeKeys.forEach(key => {
    totalChanges[key] = `${(
      (currentTotalValue / totalChanges[key] - 1) *
      100
    ).toFixed(2)} %`;
  });

  return totalChanges;
};

export default getTotalChanges;
