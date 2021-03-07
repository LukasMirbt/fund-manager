import React, { useMemo } from "react";
import styled from "styled-components";
import ListItem from "@material-ui/core/ListItem";
import { Typography } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import RecommendedNavigation from "./RecommendedNavigation";
import {
  setRecommendedFundName,
  setRecommendedTabValue,
} from "../../redux/recommendedFunds/actionCreators";
import {
  getRecommendedFunds,
  getRecommendedTabValue,
} from "../../redux/selectors";

const Container = styled.div`
  margin-top: ${({ theme: { drawerSpacingTop } }) => drawerSpacingTop};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5rem;
`;

const Row = styled.div`
  margin-bottom: 0.5rem;
  display: flex;
`;

const Tab = styled(ListItem)`
  border-radius: 4px;
  margin: 0.5rem;
  margin-top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: ${({ theme }) => theme.shadows[2]};
  background-color: ${({ sc: { selected } }) =>
    selected === true ? "rgba(0, 0, 0, 0.12)" : "white"};
  :hover {
    background-color: ${({ sc: { selected } }) =>
      selected === true ? "rgba(0, 0, 0, 0.16)" : "rgba(0, 0, 0, 0.08)"};
  }
`;

const TabText = styled(Typography)`
  font-weight: 500;
  text-transform: uppercase;
`;

const CategoryTabs = () => {
  const recommendedTabValue = useSelector((state) =>
    getRecommendedTabValue(state)
  );

  const dispatch = useDispatch();

  const recommendedFunds = useSelector((state) => getRecommendedFunds(state));

  const fundsByRecommendation = recommendedFunds.reduce(
    (acc, [fundName, recommendation]) => {
      if (recommendation === "Buy") {
        acc[0].push(fundName);
        return acc;
      }
      if (recommendation === "Hold") {
        acc[1].push(fundName);
        return acc;
      }
      if (recommendation === "Sell") {
        acc[2].push(fundName);
        return acc;
      }
    },
    { 0: [], 1: [], 2: [] }
  );

  const onTabClick = (tabNum) => () => {
    if (recommendedTabValue === tabNum) return;
    dispatch(setRecommendedFundName(fundsByRecommendation[tabNum][0]));
    dispatch(setRecommendedTabValue(tabNum));
  };

  return (
    <Container>
      <Row>
        <Tab
          button
          sc={{ selected: recommendedTabValue === 0 }}
          onClick={onTabClick(0)}
        >
          <TabText variant="subtitle2">Buy</TabText>
        </Tab>
        <Tab
          button
          sc={{ selected: recommendedTabValue === 1 }}
          onClick={onTabClick(1)}
        >
          <TabText variant="subtitle2">Hold</TabText>
        </Tab>
        <Tab
          style={{ borderRight: "none" }}
          button
          sc={{ selected: recommendedTabValue === 2 }}
          onClick={onTabClick(2)}
        >
          <TabText variant="subtitle2">Sell</TabText>
        </Tab>
      </Row>
      <RecommendedNavigation
        recommendedTabValue={recommendedTabValue}
        fundsByRecommendation={fundsByRecommendation}
      />
    </Container>
  );
};

export default CategoryTabs;
