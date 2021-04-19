import Checkbox from "@material-ui/core/Checkbox";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const SelectionHeader = ({ getFundNames, setFundNames }) => {
  const isDisabled = useSelector((state) => getFundNames(state).length === 0);

  const dispatch = useDispatch();

  useEffect(() => {
    document
      .getElementsByClassName("MuiDataGrid-colCell")[0]
      .setAttribute("aria-label", "Checkbox selection");
  }, []);

  return (
    <Checkbox
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

export default SelectionHeader;
