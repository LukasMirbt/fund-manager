import { useEffect } from "react";

const useFixToolbarAccessibility = () => {
  useEffect(() => {
    setTimeout(() => {
      //setTimeout is necessary because the toolbar doesn't exist yet if this is not executed at the end of the message queue
      const toolbar = document.getElementsByClassName("MuiDataGrid-toolbar")[0];

      const densityButton = toolbar.children[2];
      const exportButton = toolbar.children[3];

      densityButton.removeAttribute("aria-labelledBy");
      exportButton.removeAttribute("aria-labelledBy");
    });
  }, []);
};

export default useFixToolbarAccessibility;
