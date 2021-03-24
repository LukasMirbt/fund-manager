import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { setInfoFundName } from "../../../redux/portfolio/actionCreators";

const InfoIcon = styled(FontAwesomeIcon)``;

const InfoButton = ({ fundName }) => {
  const dispatch = useDispatch();
  return (
    <IconButton
      onClick={(e) => {
        e.stopPropagation();
        e.preventDefault();
        dispatch(setInfoFundName(fundName));
      }}
    >
      <InfoIcon icon={faInfoCircle} />
    </IconButton>
  );
};

export default InfoButton;
