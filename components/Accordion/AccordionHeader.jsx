import React from "react";
import styled from "styled-components";
import Chevron from "./Chevron";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { StyledListItem } from "../DrawerTabs/MainTabs";

const Title = styled(ListItemText)`
  ${({ sc: { titleCSS } }) => titleCSS}
`;

const Container = styled(StyledListItem)`
  ${({ sc: { headerCSS } }) => headerCSS};
`;

const AccordionHeader = ({
  title,
  ID,
  isExpanded,
  setIsExpanded,
  headerCSS,
  titleCSS,
  icon,
}) => {
  return (
    <Container
      onClick={() => {
        setIsExpanded((prevIsExpanded) => !prevIsExpanded);
      }}
      button
      aria-disabled="false"
      aria-expanded={isExpanded}
      aria-controls={`${ID}-content`}
      id={`${ID}-header`}
      sc={{ headerCSS }}
    >
      <ListItemIcon>{icon}</ListItemIcon>

      <Title sc={{ titleCSS }} variant="h3" component="span">
        {title}
      </Title>

      <Chevron isExpanded={isExpanded} />
    </Container>
  );
};

export default AccordionHeader;
