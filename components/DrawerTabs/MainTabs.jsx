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
import Link from "next/link";
import { setIsTemporaryDrawerOpen } from "../../redux/general/actionCreators";
import { useDispatch } from "react-redux";

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

export const TabIcon = styled(FontAwesomeIcon)`
  font-size: 1.5rem;
`;

export const StyledListItem = styled(ListItem)`
  padding-left: 1.5rem;
  padding-right: 1.5rem;
`;

const StyledList = styled(List)`
  border-top: ${({ theme }) => `1px solid ${theme.palette.divider}`};
  border-bottom: ${({ theme }) => `1px solid ${theme.palette.divider}`};
`;

const MainTabs = () => {
  const router = useRouter();

  const dispatch = useDispatch();

  return (
    <StyledList>
      {tabs.map(({ text, icon, pathname }) => (
        <Link key={text} href={pathname} passHref>
          <StyledListItem
            onClick={() => {
              dispatch(setIsTemporaryDrawerOpen(false));
            }}
            component="a"
            href={pathname}
            selected={router.pathname === pathname}
            button
            key={text}
          >
            <ListItemIcon>
              <TabIcon icon={icon} />
            </ListItemIcon>

            <ListItemText primary={text} />
          </StyledListItem>
        </Link>
      ))}
    </StyledList>
  );
};

export default MainTabs;
