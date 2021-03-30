import React from "react";

const AccordionBody = ({ ID, children }) => {
  return (
    <div aria-labelledby={`${ID}-header`} id={`${ID}-content`} role="region">
      {children}
    </div>
  );
};

export default AccordionBody;
