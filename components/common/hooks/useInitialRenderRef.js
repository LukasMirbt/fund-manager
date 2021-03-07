import { useEffect, useRef } from "react";

const useInitialRenderRef = () => {
  const isInitialRender = useRef(true);

  useEffect(() => {
    isInitialRender.current = false;
  }, []);

  return isInitialRender;
};

export default useInitialRenderRef;
