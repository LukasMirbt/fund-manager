import { useEffect, useState } from "react";

const useInitialRenderAndUpdate = () => {
  const [isInitialRender, setIsInitialRender] = useState(true);

  useEffect(() => {
    setIsInitialRender(false);
  }, []);

  return isInitialRender;
};

export default useInitialRenderAndUpdate;
