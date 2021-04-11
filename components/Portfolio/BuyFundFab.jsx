import Fab from "@material-ui/core/Fab";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { batch, useDispatch } from "react-redux";
import { setIsTemporaryDrawerOpen } from "../../redux/general/actionCreators";
import { setIsBuyFundDialogOpen } from "../../redux/portfolio/actionCreators";

const StyledFab = styled(Fab)`
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
`;

const Icon = styled(FontAwesomeIcon)`
  margin-right: 0.5rem;
  font-size: 1.25rem;
`;

const BuyFundFab = () => {
  const dispatch = useDispatch();

  return (
    <StyledFab
      onClick={() => {
        batch(() => {
          dispatch(setIsTemporaryDrawerOpen(true));
          dispatch(setIsBuyFundDialogOpen(true));
        });
      }}
      variant="extended"
      color="primary"
      aria-label="Open buy fund dialog"
    >
      <Icon icon={faPlus} />
      Buy fund
    </StyledFab>
  );
};

export default BuyFundFab;
