import React, { useState } from "react";
import AccordionHeader from "./AccordionHeader";
import AccordionBody from "./AccordionBody";

const Accordion = ({
  title,
  ID,
  children,
  headerCSS,
  titleCSS,
  className,
  icon,
  isExpandedInitially = false,
}) => {
  const [isExpanded, setIsExpanded] = useState(isExpandedInitially);

  return (
    <div className={className}>
      <AccordionHeader
        title={title}
        ID={ID}
        isExpanded={isExpanded}
        setIsExpanded={setIsExpanded}
        headerCSS={headerCSS}
        titleCSS={titleCSS}
        icon={icon}
      />

      {isExpanded === true && <AccordionBody ID={ID}>{children}</AccordionBody>}
    </div>
  );
};

export default Accordion;
