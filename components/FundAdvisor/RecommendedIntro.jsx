import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useDispatch } from "react-redux";
import { setIsRecommendedIntroShowing } from "../../redux/recommendedFunds/actionCreators";
import MUIContainer from "@material-ui/core/Container";

const Container = styled.section`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;

  flex-grow: 1;
  margin: 1.5rem;

  background-size: cover;
  background-image: url("./investments.jpeg");
  background-repeat: no-repeat;
  background-position: center;
`;

const TextContainer = styled(MUIContainer)`
  width: 100%;
  box-shadow: ${({ theme: { shadows } }) => shadows[2]};
  flex-direction: column;
  background-color: white;
  padding: 1.5rem;
`;

const Title = styled(Typography)`
  padding-bottom: 0.5rem;
  font-size: 2.5rem;
`;

const Text = styled(Typography)`
  text-align: start;
  padding-bottom: 0.5rem;
  font-size: 1.125rem;
`;

const StyledButton = styled(Button)`
  display: flex;
`;

const recommendedIntroLabelID = "recommendedIntroLabel";

const title = "View our fund recommendations";

const RecommendedIntro = () => {
  const dispatch = useDispatch();

  const closeIntro = () => {
    dispatch(setIsRecommendedIntroShowing(false));
  };

  return (
    <Container aria-labelledby={recommendedIntroLabelID}>
      <TextContainer component="div" maxWidth="sm">
        <Title
          id={recommendedIntroLabelID}
          data-testid="RecommendedIntroTitle"
          variant="h3"
          component="h2"
        >
          {title}
        </Title>

        <Text variant="body1" component="p">
          {`Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.`}
        </Text>

        <StyledButton
          color="secondary"
          variant="contained"
          data-testid="RecommendedIntroViewButton"
          onClick={closeIntro}
        >
          View our recommendations
        </StyledButton>
      </TextContainer>
    </Container>
  );
};

export default RecommendedIntro;
