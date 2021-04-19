import SelectionCell from "./Cells/SelectionCell";
import SelectionHeader from "./Cells/SelectionHeader";

const getCheckboxColumn = ({ getFundNames, setFundNames }) => ({
  field: "col0",
  headerName: "Checkbox selection",
  width: 48,
  sortable: false,
  filterable: false,
  renderCell: function renderCell({ value }) {
    return (
      <SelectionCell
        fundName={value}
        getFundNames={getFundNames}
        setFundNames={setFundNames}
      />
    );
  },
  renderHeader: function renderHeader() {
    return (
      <SelectionHeader
        getFundNames={getFundNames}
        setFundNames={setFundNames}
      />
    );
  },
});

export default getCheckboxColumn;
