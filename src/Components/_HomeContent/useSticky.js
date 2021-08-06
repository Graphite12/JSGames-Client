import { useEffect, useRef, useState } from "react";

const useSticky = () => {
  const [isSticky, setIsSticky] = useState();
  const element = useRef();

  const handleScroll = () => {
    if (!element.current) return;

    window.scrollY >= element.current.getBoundingClientRect().bottom
      ? setIsSticky(true)
      : setIsSticky(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  }, [handleScroll]);
  return { isSticky, element };
};

export default useSticky;
