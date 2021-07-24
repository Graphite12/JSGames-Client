import {
  StyledSectonC,
  StyledSectonD,
  StyledSectonE,
} from "./styles/StyledSectionCDE";
import { useEffect, useState, useRef } from "react";
import SubNav from "./SubNav";

export default function SectionC() {
  const [isSticky, setIsSticky] = useState(false);
  const element = useRef(null);

  const handleScroll = () => {
    window.scrollY > element.current.getBoundingClientRect().bottom
      ? setIsSticky(true)
      : setIsSticky(false);
  };

  console.log(isSticky);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <StyledSectonC ref={element}>
      <SubNav Sticky={isSticky} />
      <h2>개요</h2>
      <div>React, JS로 구현한 웹 게임을 체험 해 보세요.</div>
    </StyledSectonC>
  );
}
