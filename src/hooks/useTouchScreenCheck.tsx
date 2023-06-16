import { useEffect, useState } from "react";

const useTouchScreenCheck = (): boolean => {
  const [isTouchScreen, setIsTouchScreen] = useState<boolean>(false);

  useEffect(() => {
    const handleTouchScreenChange = (event: MediaQueryListEvent) => {
      setIsTouchScreen(event.matches);
    };

    const touchScreenMediaQuery = window.matchMedia("(hover: none)");
    setIsTouchScreen(touchScreenMediaQuery.matches);
    touchScreenMediaQuery.addEventListener("change", handleTouchScreenChange);

    return () => {
      touchScreenMediaQuery.removeEventListener(
        "change",
        handleTouchScreenChange
      );
    };
  }, []);

  return isTouchScreen;
};

export default useTouchScreenCheck;
