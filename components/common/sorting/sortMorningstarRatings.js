const sortMorningstarRatings = (a, b, sortOrderRef) => {
  const sortOrder = sortOrderRef.current;

  if (a === b) {
    return 0;
  } else if (a === "-") {
    return sortOrder === "asc" ? 1 : -1;
  } else if (b === "-") {
    return sortOrder === "asc" ? -1 : 1;
  } else {
    return +a > +b ? 1 : -1;
  }
};

export default sortMorningstarRatings;
