import getRoundingMultiplier from "./getRoundingMultiplier";

const getMinValue = (max, min) => {
  const range = Math.round(max - min);
  const roundingMultiplier = getRoundingMultiplier(range);
  const val =
    Math.floor(min / roundingMultiplier) * roundingMultiplier -
    roundingMultiplier;
  return val >= 0 ? val : 0;
};

export default getMinValue;
