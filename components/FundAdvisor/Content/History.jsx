import React from "react";
import { useSelector } from "react-redux";
import { getData, getRecommendedFunds } from "../../../redux/selectors";
import { Subheading, Body } from "./Description";

const History = ({ fundIndex }) => {
  const recommendedFunds = useSelector((state) => getRecommendedFunds(state));

  const [recommendedFundName, recommendation] = recommendedFunds[fundIndex];

  const data = useSelector((state) => getData(state));

  console.log(data[recommendedFundName]);

  const { oneDC, oneYC, threeYC, fiveYC } = data[recommendedFundName].tableData;

  return (
    <>
      <Subheading variant="h6" component="h3">
        History
      </Subheading>

      <Body variant="body1">
        {`Contrary to popular belief, Lorem Ipsum is not simply random text. 
        It has roots in a piece of classical Latin literature from 45 BC, 
        making it over 2000 years old. Richard McClintock, 
        a Latin professor at Hampden-Sydney College in Virginia, 
        looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, 
        and going through the cites of the word in classical literature, 
        discovered the undoubtable source.`}
      </Body>
    </>
  );
};

export default History;
