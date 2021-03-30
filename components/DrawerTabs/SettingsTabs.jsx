import React, { useEffect } from "react";
import styled from "styled-components";
import { faCalendarAlt, faCog } from "@fortawesome/free-solid-svg-icons";
import Settings from "./Settings";
import ChangeTimespan from "./ChangeTimespan";
import Accordion from "../Accordion/Accordion";
import { useDispatch, useSelector } from "react-redux";
import { getInitialOpenDrawerTabIndex } from "../../redux/selectors";
import { setInitialOpenDrawerTabIndex } from "../../redux/general/actionCreators";
import { TabIcon } from "./MainTabs";

const settingsTabs = [
  {
    icon: <TabIcon icon={faCalendarAlt} />,
    text: "Timespan",
    component: <ChangeTimespan />,
  },
  {
    icon: <TabIcon icon={faCog} />,
    text: "Settings",
    component: <Settings />,
  },
];

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: ${({ theme }) => `1px solid ${theme.palette.divider}`};
  padding: 0.5rem 0;
`;

const SettingsTabs = () => {
  const initialOpenDrawerTabIndex = useSelector((state) =>
    getInitialOpenDrawerTabIndex(state)
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (initialOpenDrawerTabIndex !== null) {
      document
        .getElementById(
          `${settingsTabs[initialOpenDrawerTabIndex].text}-header`
        )
        .focus();
    }

    return () => {
      dispatch(setInitialOpenDrawerTabIndex(null));
    };
  }, [initialOpenDrawerTabIndex, dispatch]);

  return (
    <Container>
      {settingsTabs.map(({ icon, text, component }, index) => {
        return (
          <Accordion
            isExpandedInitially={initialOpenDrawerTabIndex === index}
            key={text}
            title={text}
            ID={text}
            icon={icon}
          >
            {component}
          </Accordion>
        );
      })}
    </Container>
  );
};

export default SettingsTabs;
