const roundToSetPrecision = (value) => {
  const multiplier = 10 ** Number(process.env.NUMBER_OF_DECIMALS);
  return Math.round((value + Number.EPSILON) * multiplier) / multiplier;
};

export default roundToSetPrecision;
