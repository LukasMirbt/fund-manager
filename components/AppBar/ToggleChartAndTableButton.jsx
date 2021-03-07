import React from "react";
import IconButton from "@material-ui/core/IconButton";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faClipboardList,
} from "@fortawesome/free-solid-svg-icons";
import { getIsTableHidden, getTabValue } from "../../redux/selectors";
import { setIsTableHidden } from "../../redux/fundList/actionCreators";

const Button = styled(IconButton)`
  display: ${({ sc: { tabValue } }) =>
    tabValue === 1 || tabValue === 2 ? "block" : "none"};
  box-sizing: border-box;
  padding: 0;
  height: 3rem;
  width: 3rem;
  color: white;
  position: absolute;
  right: 4rem;
  background-color: ${({ theme: { primary } }) => primary};
  :hover {
    background-color: ${({ theme: { primaryColorHover } }) =>
      primaryColorHover};
  }

  @media (min-width: 1600px) {
    display: none;
  }
`;

const Icon = styled(FontAwesomeIcon)`
  /*   margin-bottom: ${({ sc: { isTableHidden } }) =>
    isTableHidden === true ? "0.15rem" : 0}; */
`;

const ToggleChartAndTableButton = () => {
  const isTableHidden = useSelector((state) => getIsTableHidden(state));
  const tabValue = useSelector((state) => getTabValue(state));

  const dispatch = useDispatch();

  const onToggleIconClick = () => {
    dispatch(setIsTableHidden(!isTableHidden));
  };

  return (
    <Button sc={{ tabValue }} onClick={onToggleIconClick}>
      <Icon
        sc={{ isTableHidden }}
        icon={isTableHidden === true ? faClipboardList : faChartLine}
      />
    </Button>
  );
};

export default ToggleChartAndTableButton;
