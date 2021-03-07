import React from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import { useSelector } from "react-redux";
import { getData, getRecommendedFundName } from "../../redux/selectors";

const Container = styled.div`
  display: flex;
  padding: 1.5rem;
  box-sizing: border-box;
  text-align: start;
  flex-direction: column;
  padding-bottom: 0;
`;

const Title = styled(Typography)`
  margin-bottom: 0.5rem;
`;

const Recommendation = styled.span`
  color: ${({ sc: { recommendation } }) => {
    if (recommendation === "buy") {
      return "green";
    } else if (recommendation === "sell") {
      return "red";
    } else {
      return "blue";
    }
  }};
  margin-left: 0.5rem;
`;

const BodyText = styled(Typography)`
  text-align: start;
`;

const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Lorem ipsum dolor sit amet, consectetur adipiscing elit,
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`;

export const recommendedFundsLabelID = "recommendedFundsLabel";

const RecommendedText = () => {
  const recommendedFundName = useSelector((state) =>
    getRecommendedFundName(state)
  );
  const data = useSelector((state) => getData(state));

  const recommendation = data[
    recommendedFundName
  ].tableData.recommendation.toLowerCase();

  return (
    <Container>
      <Title id={recommendedFundsLabelID} variant="h3" component="h2">
        {recommendedFundName}
        <Recommendation sc={{ recommendation }}>
          {`[${recommendation}]`}
        </Recommendation>
      </Title>

      {/*       <Recommendation data-testid="RecommendedTextRecommendation" variant="h5">
        {`Our recommendation: ${recommendation}`}
      </Recommendation> */}

      <BodyText variant="body1" component="p">
        {text}
      </BodyText>
    </Container>
  );
};

export default RecommendedText;
