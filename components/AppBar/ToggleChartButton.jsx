import { useState, useEffect } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faClipboardList,
} from "@fortawesome/free-solid-svg-icons";
import IconButton from "@material-ui/core/IconButton";
import { useDispatch, useSelector } from "react-redux";
import { getIsChartShowingForSmallScreens } from "../../redux/selectors";
import { setIsChartShowingForSmallScreens } from "../../redux/general/actionCreators";

const Icon = styled(FontAwesomeIcon)`
  && {
    width: 24px;
    height: 24px;
  }
`;

const StyledIconButton = styled(IconButton)`
  color: white;

  &:hover {
    background-color: rgba(255, 255, 255, 0.08);
  }
`;

const ToggleChartButton = () => {
  const isChartShowingForSmallScreens = useSelector((state) =>
    getIsChartShowingForSmallScreens(state)
  );

  const dispatch = useDispatch();

  const [isInitialRender, setIsInitialRender] = useState(true);

  useEffect(() => {
    setIsInitialRender(false);
  }, []);

  return isInitialRender === false ? (
    <StyledIconButton
      onClick={() => {
        dispatch(
          setIsChartShowingForSmallScreens(!isChartShowingForSmallScreens)
        );
      }}
    >
      <Icon
        icon={
          isChartShowingForSmallScreens === true ? faClipboardList : faChartLine
        }
      />
    </StyledIconButton>
  ) : null;
};

export default ToggleChartButton;
