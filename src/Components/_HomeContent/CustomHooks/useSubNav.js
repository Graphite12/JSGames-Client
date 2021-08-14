import { useRef, useContext, useEffect } from "react";
import { useOnScreen } from "./useOnScreen";
import { SubNavContext } from "./SubNavContext";

export const useSubNav = (linkId) => {
  const ref = useRef(null);
  const { setActiveNavLinkId } = useContext(SubNavContext);
  const isOnScreen = useOnScreen(ref);

  useEffect(() => {
    if (isOnScreen) {
      setActiveNavLinkId(linkId);
    }
  }, [isOnScreen, setActiveNavLinkId, linkId]);

  return ref;
};
