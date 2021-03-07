const getRoundingMultiplier = (range) => {
  if (range < 5) {
    return 2;
  }
  if (range >= 5 && range < 20) {
    return 5;
  }
  if (range >= 20 && range < 70) {
    return 10;
  }
  if (range >= 70 && range < 140) {
    return 20;
  }
  if (range >= 140 && range < 300) {
    return 50;
  }
  if (range >= 300 && range < 800) {
    return 100;
  }
  if (range >= 800 && range < 1500) {
    return 200;
  }
  if (range >= 1500 && range < 2500) {
    return 500;
  }
  if (range >= 2500) {
    return 1000;
  }
};

export default getRoundingMultiplier;
