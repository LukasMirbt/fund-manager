import { useState, useEffect } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faClipboardList,
} from "@fortawesome/free-solid-svg-icons";
import IconButton from "@material-ui/core/IconButton";
import { useDispatch, useSelector } from "react-redux";
import {
  getCredentials,
  getIsChartShowingForSmallScreens,
  getIsIntroShowing,
} from "../../redux/selectors";
import { setIsChartShowingForSmallScreens } from "../../redux/general/actionCreators";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useRouter } from "next/router";

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

  const isLargeScreen = useMediaQuery((theme) => theme.breakpoints.up("lg"));

  const credentials = useSelector((state) => getCredentials(state));

  const isIntroShowing = useSelector((state) => getIsIntroShowing(state));

  const { pathname } = useRouter();

  const isShowing =
    isInitialRender === false &&
    isLargeScreen === false &&
    (pathname.includes("portfolio") === false ||
      credentials.token !== undefined) &&
    (pathname.includes("fund-advisor") === false || isIntroShowing === false);

  return isShowing === true ? (
    <StyledIconButton
      aria-label={
        isChartShowingForSmallScreens === true ? "Hide chart" : "Show chart"
      }
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
