import sortStrings from "./sortStrings";
import sortNumbers from "./sortNumbers";
import sortDateStrings from "./sortDateStrings";
import sortPercentStrings from "./sortPercentStrings";

const getSortedTableData = (tableData, filter, sortParameters) => {
  const filteredTableData =
    filter === ""
      ? tableData.slice(0)
      : tableData.filter((fundObj) =>
          fundObj.fundName.toLowerCase().includes(filter.toLowerCase())
        );

  switch (sortParameters.key) {
    case "fundName": {
      return sortStrings(filteredTableData, sortParameters);
    }
    case "morningstarRating": {
      return sortNumbers(filteredTableData, sortParameters);
    }
    case "mostRecentDate": {
      return sortDateStrings(filteredTableData, sortParameters);
    }
    default: {
      return sortPercentStrings(filteredTableData, sortParameters);
    }
  }
};

export default getSortedTableData;
