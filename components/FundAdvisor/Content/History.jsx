import React from "react";
import { Subheading, Body } from "./Description";

const History = () => {
  return (
    <>
      <Subheading variant="h6" component="h3">
        History
      </Subheading>

      <Body variant="body1">
        {`The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. 
        Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" 
        by Cicero are also reproduced in their exact original form, 
        accompanied by English versions from the 1914 translation by H. Rackham.`}
      </Body>
    </>
  );
};

export default History;
