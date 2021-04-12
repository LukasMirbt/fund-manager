import React from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import { useSelector } from "react-redux";
import { getData, getRecommendedFunds } from "../../../redux/selectors";
import StarGroup from "../../common/components/StarGroup";
import { Subheading } from "./Description";
import ChangeTable from "./ChangeTable";

const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
`;

const Rating = styled(Typography)`
  margin-right: 0.5rem;
`;

const IndexFund = styled(Typography)``;
const Identifier = styled(Typography)``;

const AdditionalInfo = ({ fundIndex }) => {
  const recommendedFunds = useSelector((state) => getRecommendedFunds(state));

  const [recommendedFundName] = recommendedFunds[fundIndex];

  const data = useSelector((state) => getData(state));

  const { ISIN, indexFund, morningstarRating } = data[
    recommendedFundName
  ].chartData;

  const { oneDC, oneYC, threeYC, fiveYC } = data[recommendedFundName].tableData;

  const row = [
    {
      headerData: "1-day change",
      cellData: oneDC,
    },
    {
      headerData: "1-year change",
      cellData: oneYC,
    },
    {
      headerData: "3-year change",
      cellData: threeYC,
    },
    {
      headerData: "5-year change",
      cellData: fiveYC,
    },
  ];

  return (
    <>
      <ChangeTable fundName={recommendedFundName} row={row} />
      <Column>
        <Subheading variant="h6" component="h3">
          Additional information
        </Subheading>

        <IndexFund
          variant="subtitle1"
          component="p"
        >{`Index fund: ${indexFund}`}</IndexFund>

        <Row>
          <Rating variant="subtitle1" component="p">
            {`Morningstar rating: `}
          </Rating>

          <StarGroup value={morningstarRating} />
        </Row>

        <Identifier variant="subtitle1" component="p">
          {`ISIN: ${ISIN}`}
        </Identifier>
      </Column>
    </>
  );
};

export default AdditionalInfo;
