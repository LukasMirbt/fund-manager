const roundToNumberOfDecimals = (value, numberOfDecimals) => {
  const multiplier = numberOfDecimals ** 10;
  return Math.round((value + Number.EPSILON) * multiplier) / multiplier;
};

export default roundToNumberOfDecimals;
