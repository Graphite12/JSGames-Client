import { useEffect, useRef, useState } from "react";

const useSticky = () => {
  const [isSticky, setIsSticky] = useState();
  const element = useRef();

  const handleScroll = () => {
    //useRef가
    if (!element.current) return;

    window.scrollY >= element.current.getBoundingClientRect().bottom - 1520
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
