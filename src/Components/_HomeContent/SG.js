import { useEffect, useState, useRef } from "react";

//component
import SectionC from "./SectionC";
import SectionD from "./SectionD";
import SectionE from "./SectionE";
import { LogPage } from "./styles/StyledSectionCDE";
import SubNavigation from "./SubNavigation";

export default function NextPage() {
  const target = useRef(null);
  const pos = target.current.getBoundingClientRect().top;
  return (
    <LogPage>
      <SubNavigation pos={pos} />
      <SectionC meme={target} />
      {console.log(target)}
      <SectionD />
      <SectionE />
    </LogPage>
  );
}

/**쓰레기더미들
 * 
 *     const handleScroll = () => {
      window.scrollY > element.current.getBoundingClientRect().bottom
        ? setIsSticky(true)
        : setIsSticky(false);
      // console.log(window.scrollY);
    };

    console.log(isSticky);

    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, [handleScroll]);

 * 
 */
