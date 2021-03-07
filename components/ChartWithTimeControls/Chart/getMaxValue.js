import getRoundingMultiplier from "./getRoundingMultiplier";

const getMaxValue = (max, min) => {
  const range = Math.round(max - min);
  const roundingMultiplier = getRoundingMultiplier(range);
  return (
    Math.ceil(max / roundingMultiplier) * roundingMultiplier +
    roundingMultiplier
  );
};

export default getMaxValue;
