import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { IconButton } from "@material-ui/core";
import { setRecommendedFundName } from "../../redux/recommendedFunds/actionCreators";
import { getRecommendedFundName } from "../../redux/selectors";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PageNumber = styled.span`
  font-size: 1rem;
  width: 3.325rem;
  display: flex;
  align-items: center;
  font-family: ${({ theme: { fontFamily } }) => fontFamily};
  justify-content: center;
`;

const ArrowButton = styled(IconButton)`
  box-shadow: ${({ theme: { shadows } }) => shadows[2]};
  height: 2.5rem;
  width: 2.5rem;
  padding: 0.5rem;
`;

const ArrowIcon = styled(FontAwesomeIcon)`
  font-size: 1.5rem;
  color: rgba(0, 0, 0, 0.87);
`;

const RecommendedNavigation = ({
  recommendedTabValue,
  fundsByRecommendation,
}) => {
  const dispatch = useDispatch();

  const recommendedFundName = useSelector((state) =>
    getRecommendedFundName(state)
  );

  const index = fundsByRecommendation[recommendedTabValue].indexOf(
    recommendedFundName
  );

  const next = () => {
    const nextIndex =
      index < fundsByRecommendation[recommendedTabValue].length - 1
        ? index + 1
        : 0;
    const nextFundName = fundsByRecommendation[recommendedTabValue][nextIndex];
    dispatch(setRecommendedFundName(nextFundName));
  };

  const back = () => {
    const previousIndex =
      index > 0
        ? index - 1
        : fundsByRecommendation[recommendedTabValue].length - 1;
    const previousFundName =
      fundsByRecommendation[recommendedTabValue][previousIndex];
    dispatch(setRecommendedFundName(previousFundName));
  };

  const pageNumber = index + 1;

  const numberOfPages = fundsByRecommendation[recommendedTabValue].length;

  return (
    <Container>
      <ArrowButton onClick={back}>
        <ArrowIcon icon={faArrowLeft} />
      </ArrowButton>

      <PageNumber>
        {pageNumber}/{numberOfPages}
      </PageNumber>

      <ArrowButton onClick={next}>
        <ArrowIcon icon={faArrowRight} />
      </ArrowButton>
    </Container>
  );
};

export default RecommendedNavigation;
