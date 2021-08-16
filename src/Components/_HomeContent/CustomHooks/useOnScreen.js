import { useState, useEffect, useMemo } from "react";

export const useOnScreen = (ref) => {
  const [isOnScreen, setOnScreen] = useState(false);
  //
  const observer = useMemo(
    () =>
      new IntersectionObserver(
        ([entry]) => setOnScreen(entry.isIntersecting),
        {
          threshold: [0.25, 0.5, 0.75],
        },
        [isOnScreen]
      )
  );

  useEffect(() => {
    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, [observer, isOnScreen]);

  return isOnScreen;
};
