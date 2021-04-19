import Checkbox from "@material-ui/core/Checkbox";
import { useDispatch, useSelector } from "react-redux";
import onFundSelect from "../../../redux/onFundSelect";

const SelectionCell = ({ fundName, getFundNames, setFundNames }) => {
  const isSelected = useSelector(
    (state) => getFundNames(state).includes(fundName) === true
  );

  const dispatch = useDispatch();

  return (
    <Checkbox
      color="primary"
      checked={isSelected}
      onChange={() => {
        dispatch(onFundSelect({ fundName, getFundNames, setFundNames }));
      }}
      inputProps={{
        "aria-label": "Add fund to chart",
      }}
    />
  );
};

export default SelectionCell;
