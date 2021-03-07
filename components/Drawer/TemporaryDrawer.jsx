import React from "react";
import MUITemporaryDrawer from "@material-ui/core/Drawer";
import { useDispatch, useSelector } from "react-redux";
import { getIsTemporaryDrawerOpen } from "../../redux/selectors";
import { setIsTemporaryDrawerOpen } from "../../redux/general/actionCreators";
import DrawerComponent from "./DrawerComponent";

const TemporaryDrawer = () => {
  const dispatch = useDispatch();

  const isTemporaryDrawerOpen = useSelector((state) =>
    getIsTemporaryDrawerOpen(state)
  );

  return (
    <MUITemporaryDrawer
      anchor="left"
      open={isTemporaryDrawerOpen}
      onClose={() => {
        dispatch(setIsTemporaryDrawerOpen(false));
      }}
    >
      <DrawerComponent />
    </MUITemporaryDrawer>
  );
};

export default TemporaryDrawer;
