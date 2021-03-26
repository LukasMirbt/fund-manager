import React from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import { useSelector } from "react-redux";
import { getData, getRecommendedFunds } from "../../../redux/selectors";
import StarGroup from "../../common/components/StarGroup";
import { Subheading } from "./Description";

const Info = styled(Typography)``;

const Row = styled.div`
  display: flex;
`;

const RecommendedText = ({ fundIndex }) => {
  const recommendedFunds = useSelector((state) => getRecommendedFunds(state));

  const [recommendedFundName, recommendation] = recommendedFunds[fundIndex];

  const data = useSelector((state) => getData(state));

  const { ISIN, indexFund, morningstarRating } = data[
    recommendedFundName
  ].chartData;
  return (
    <>
      <Subheading variant="h6" component="h3">
        Additional information
      </Subheading>

      <Info>
        {`Index fund: ${indexFund}`}
        <Row>
          {`Morningstar rating: `} <StarGroup value={morningstarRating} />
        </Row>
        {`ISIN: ${ISIN}`}
      </Info>
    </>
  );
};

export default RecommendedText;
