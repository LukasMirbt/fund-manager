import React from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import { useSelector } from "react-redux";
import { getRecommendedFunds } from "../../redux/selectors";
import Stepper from "./Stepper";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: space-between;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1.5rem;
`;

const Heading = styled(Typography)`
  margin-bottom: 0.5rem;
`;

const Subheading = styled(Typography)`
  margin-bottom: 0.25rem;
`;

const Description = styled(Typography)`
  margin-bottom: 0.5rem;
`;
const Forecast = styled(Typography)``;

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

const RecommendedText = ({ fundIndex, setFundIndex }) => {
  const recommendedFunds = useSelector((state) => getRecommendedFunds(state));

  const [recommendedFundName, recommendation] = recommendedFunds[fundIndex];

  return (
    <Container>
      <Column>
        <Heading id={recommendedFundsLabelID} variant="h3" component="h2">
          <Recommendation
            variant="h3"
            component="span"
            sc={{ recommendation }}
          >{`${recommendation}: `}</Recommendation>
          {recommendedFundName}
        </Heading>

        <Subheading variant="h6" component="h3">
          Description
        </Subheading>

        <Description variant="body1">
          {`Contrary to popular belief, Lorem Ipsum is not simply random text. 
        It has roots in a piece of classical Latin literature from 45 BC, 
        making it over 2000 years old. Richard McClintock, 
        a Latin professor at Hampden-Sydney College in Virginia, 
        looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, 
        and going through the cites of the word in classical literature, 
        discovered the undoubtable source.`}
        </Description>

        <Subheading variant="h6" component="h3">
          Forecast
        </Subheading>

        <Forecast variant="body1">
          {`Lorem Ipsum comes from
         sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" 
         (The Extremes of Good and Evil) by Cicero, written in 45 BC. 
         This book is a treatise on the theory of ethics, very popular during the Renaissance. 
         The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", 
         comes from a line in section 1.10.32. `}
        </Forecast>
      </Column>

      {/*       Lorem Ipsum comes from
         sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" 
         (The Extremes of Good and Evil) by Cicero, written in 45 BC. 
         This book is a treatise on the theory of ethics, very popular during the Renaissance. 
         The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", 
         comes from a line in section 1.10.32. */}

      <Stepper
        fundIndex={fundIndex}
        setFundIndex={setFundIndex}
        recommendedFunds={recommendedFunds}
      />
    </Container>
  );
};

export default RecommendedText;
