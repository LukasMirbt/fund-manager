const sortPercentString = (a, b) => {
  const x = +a.slice(0, -2);
  const y = +b.slice(0, -2);
  return x > y ? 1 : -1;
};

export default sortPercentString;
