import React, { useState, useEffect } from "react";
import styled from "styled-components";
import List from "@material-ui/core/List";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { getInitialOpenDrawerTabIndex } from "../../redux/selectors";
import { setInitialOpenDrawerTabIndex } from "../../redux/general/actionCreators";

export const TabIcon = styled(FontAwesomeIcon)`
  font-size: 1.5rem;
`;

export const StyledListItem = styled(ListItem)`
  padding-left: 1.5rem;
`;

const DropDownTabs = ({ tabs }) => {
  const initialOpenDrawerTabIndex = useSelector((state) =>
    getInitialOpenDrawerTabIndex(state)
  );

  const dispatch = useDispatch();

  const [openTabIndex, setOpenTabIndex] = useState(initialOpenDrawerTabIndex);

  useEffect(() => {
    if (initialOpenDrawerTabIndex !== null) {
      document
        .getElementById(`dropdownTab${initialOpenDrawerTabIndex}`)
        .focus();
    }

    return () => {
      dispatch(setInitialOpenDrawerTabIndex(null));
    };
  }, [initialOpenDrawerTabIndex, dispatch]);

  return (
    <>
      <List>
        {tabs.map(({ icon, text }, index) => {
          return (
            <React.Fragment key={text}>
              <StyledListItem
                id={`dropdownTab${index}`}
                button
                selected={openTabIndex === index}
                onClick={() => {
                  setOpenTabIndex(openTabIndex === index ? null : index);
                }}
              >
                <ListItemIcon>
                  <TabIcon icon={icon} />
                </ListItemIcon>

                <ListItemText primary={text} />
              </StyledListItem>

              {openTabIndex === index && tabs[index].component}
            </React.Fragment>
          );
        })}
      </List>

      <Divider />
    </>
  );
};

export default DropDownTabs;
