import styled from "styled-components";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import { useDispatch, useSelector } from "react-redux";
import {
  getData,
  getNumberOfSharesToBuy,
  getSelectedFundNameToBuy,
} from "../../../../redux/selectors";
import { buyFund } from "../../../../redux/portfolio/actionCreators";
import { showNotification } from "../../../../redux/general/actionCreators";

const StyledDialogActions = styled(DialogActions)`
  justify-content: space-between;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
`;

const Buttons = ({ setOpen }) => {
  const numberOfSharesToBuy = useSelector((state) =>
    getNumberOfSharesToBuy(state)
  );

  const selectedFundNameToBuy = useSelector((state) =>
    getSelectedFundNameToBuy(state)
  );

  const data = useSelector((state) => getData(state));

  const dispatch = useDispatch();

  console.log(numberOfSharesToBuy);
  console.log(selectedFundNameToBuy);

  return (
    <StyledDialogActions>
      <Button
        onClick={() => {
          setOpen(false);
        }}
        color="primary"
      >
        Cancel
      </Button>
      <Button
        disabled={
          numberOfSharesToBuy === null || selectedFundNameToBuy === null
        }
        onClick={() => {
          const { xData, yData } = data[selectedFundNameToBuy].chartData;

          dispatch(
            buyFund({
              shares: numberOfSharesToBuy,
              fundName: selectedFundNameToBuy,
              buyDate: xData[xData.length - 1],
              NAV: yData[yData.length - 1],
            })
          );

          dispatch(
            showNotification({
              text: `Bought ${numberOfSharesToBuy} ${
                numberOfSharesToBuy > 1 ? "shares" : "share"
              } of ${selectedFundNameToBuy}`,
              severity: "success",
            })
          );

          setOpen(false);
        }}
        color="primary"
      >
        Buy
      </Button>
    </StyledDialogActions>
  );
};

export default Buttons;
