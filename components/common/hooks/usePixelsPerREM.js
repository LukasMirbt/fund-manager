import { useEffect, useState } from "react";

const usePixelsPerREM = () => {
  const getWindowFontSize = () => {
    if (typeof window !== undefined) {
      return Number(
        window
          .getComputedStyle(document.body)
          .getPropertyValue("font-size")
          .slice(0, -2)
      );
    } else {
      return 16;
    }
  };

  const [pixelsPerREM, setPixelsPerREM] = useState(() => getWindowFontSize());

  useEffect(() => {
    const onResize = () => {
      const newNumber = getWindowFontSize();
      if (newNumber !== pixelsPerREM) {
        setPixelsPerREM(newNumber);
      }
    };

    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, [pixelsPerREM]);

  return pixelsPerREM;
};

export default usePixelsPerREM;
