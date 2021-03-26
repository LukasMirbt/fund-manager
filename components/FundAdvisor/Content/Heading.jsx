import React from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import { useSelector } from "react-redux";
import { getRecommendedFunds } from "../../../redux/selectors";

const Heading = styled(Typography)`
  margin-bottom: 0.5rem;
`;

const Recommendation = styled(Typography)`
  color: ${({ sc: { recommendation } }) => {
    if (recommendation === "Buy") {
      return "green";
    } else if (recommendation === "Sell") {
      return "red";
    } else {
      return "blue";
    }
  }};
`;

export const recommendedFundsLabelID = "recommendedFundsLabel";

const RecommendedText = ({ fundIndex }) => {
  const recommendedFunds = useSelector((state) => getRecommendedFunds(state));

  const [recommendedFundName, recommendation] = recommendedFunds[fundIndex];

  return (
    <Heading id={recommendedFundsLabelID} variant="h3" component="h2">
      <Recommendation
        variant="h3"
        component="span"
        sc={{ recommendation }}
      >{`${recommendation}: `}</Recommendation>
      {recommendedFundName}
    </Heading>
  );
};

export default RecommendedText;
