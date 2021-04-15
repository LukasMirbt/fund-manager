import styled from "styled-components";
import Checkbox from "@material-ui/core/Checkbox";
import { useDispatch, useSelector } from "react-redux";
import onFundSelect from "../../redux/onFundSelect";
import { useEffect } from "react";

const StyledCheckbox = styled(Checkbox)``;

const renderSelectionCell = ({ fundName, getFundNames, setFundNames }) => {
  const isSelected = useSelector(
    (state) => getFundNames(state).includes(fundName) === true
  );

  const dispatch = useDispatch();

  return (
    <StyledCheckbox
      color="primary"
      checked={isSelected}
      onChange={() => {
        dispatch(onFundSelect({ fundName, getFundNames, setFundNames }));
      }}
      inputProps={{
        "aria-label":
          isSelected === true ? "Remove fund from chart" : "Add fund to chart",
      }}
    />
  );
};

const HeaderCheckbox = styled(StyledCheckbox)``;

const renderSelectionheader = ({ getFundNames, setFundNames }) => {
  const isDisabled = useSelector((state) => getFundNames(state).length === 0);

  const dispatch = useDispatch();

  useEffect(() => {
    document
      .getElementsByClassName("MuiDataGrid-colCell")[0]
      .setAttribute("aria-label", "Checkbox selection");
  }, []);

  return (
    <HeaderCheckbox
      color="primary"
      checked={!isDisabled}
      indeterminate={!isDisabled}
      disabled={isDisabled}
      onChange={() => {
        dispatch(setFundNames([]));
      }}
      inputProps={{
        "aria-label": "Remove all funds from chart",
      }}
    />
  );
};

const getCheckboxColumn = ({ getFundNames, setFundNames }) => ({
  field: "col0",
  headerName: "Checkbox selection",
  width: 48,
  sortable: false,
  renderCell: ({ value }) =>
    renderSelectionCell({ fundName: value, getFundNames, setFundNames }),
  renderHeader: () => renderSelectionheader({ getFundNames, setFundNames }),
});

export default getCheckboxColumn;
