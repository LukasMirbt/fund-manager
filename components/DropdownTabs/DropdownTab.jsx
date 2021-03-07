import React, { useState } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled, { css } from "styled-components";

export const StyledDropdownTab = styled(ListItem)`
  padding-left: 1.5rem;
  ${({ sc: { isOpen } }) =>
    isOpen === true &&
    css`
      /* margin-bottom: 1rem; */
      background-color: rgba(0, 0, 0, 0.12);
      &:hover {
        background-color: rgba(0, 0, 0, 0.16);
      }
    `}
`;

export const TabIcon = styled(FontAwesomeIcon)`
  font-size: 1.5rem;
`;

const DropdownTab = ({
  icon,
  text,
  getDropdownTab,
  tabNumber,
  isOpenInitially = false,
}) => {
  const [isOpen, setIsOpen] = useState(isOpenInitially);

  const onTabClick = () => {
    setIsOpen((prevOpen) => !prevOpen);
  };

  return (
    <>
      <StyledDropdownTab sc={{ isOpen }} button onClick={onTabClick}>
        <ListItemIcon>
          <TabIcon icon={icon} />
        </ListItemIcon>

        <ListItemText primary={text} />
      </StyledDropdownTab>

      {isOpen === true && getDropdownTab(tabNumber, setIsOpen)}
    </>
  );
};

export default DropdownTab;
