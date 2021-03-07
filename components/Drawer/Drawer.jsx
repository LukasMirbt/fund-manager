import React from "react";
import TemporaryDrawer from "./TemporaryDrawer";
import { useMediaQuery } from "@material-ui/core";
import DrawerComponent from "./DrawerComponent";

const Drawer = () => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    /*  isSmallScreen === true ? */ <TemporaryDrawer />
  ); /* : <DrawerComponent />; */
};

export default Drawer;
