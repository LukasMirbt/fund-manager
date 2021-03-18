import React from "react";
import styled from "styled-components";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClipboardList,
  faBriefcase,
  faClipboardCheck,
} from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

const tabs = [
  {
    text: "Fund list",
    pathname: "/",
    icon: faClipboardList,
  },
  {
    text: "Fund advisor",
    pathname: "/fund-advisor",
    icon: faClipboardCheck,
  },

  {
    text: "Portfolio",
    pathname: "/portfolio",
    icon: faBriefcase,
  },
];

const StyledIcon = styled(FontAwesomeIcon)`
  font-size: 1.5rem;
`;

const StyledListItem = styled(ListItem)`
  padding-left: 1.5rem;
`;

const StyledList = styled(List)`
  border-top: ${({ theme }) => `1px solid ${theme.palette.divider}`};
  border-bottom: ${({ theme }) => `1px solid ${theme.palette.divider}`};
`;

const MainTabs = () => {
  const router = useRouter();

  return (
    <StyledList>
      {tabs.map(({ text, icon, pathname }) => (
        <StyledListItem
          selected={router.pathname === pathname}
          button
          key={text}
          onClick={() => {
            router.push(pathname);
          }}
        >
          <ListItemIcon>
            <StyledIcon icon={icon} />
          </ListItemIcon>

          <ListItemText primary={text} />
        </StyledListItem>
      ))}
    </StyledList>
  );
};

export default MainTabs;
