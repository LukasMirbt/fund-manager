const round = ({ value, numberOfDecimals }) => {
  const multiplier = 10 ** numberOfDecimals;
  return Math.round((value + Number.EPSILON) * multiplier) / multiplier;
};

export default round;
