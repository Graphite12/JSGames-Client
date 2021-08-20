import { useEffect, useState } from "react";
import { ScrollToTopBox, ToUpBtn } from "./styles/StyledScrollToTop";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const handleToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <ScrollToTopBox isVisible={isVisible}>
      {isVisible && (
        <ToUpBtn onClick={handleToTop}>
          <h3>UP</h3>
        </ToUpBtn>
      )}
    </ScrollToTopBox>
  );
}
