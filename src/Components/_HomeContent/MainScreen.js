//component
import SectionC from "./SectionC";
import HowToPlay from "./_HowToPlayContent/HowToPlay";
import SectionE from "./SectionE";
import SuvNavProvider from "./CustomHooks/SubNavContext";
import { LogPage } from "./styles/StyledSectionCDE";
import SubNavigation from "./SubNavigation";
import useSticky from "./CustomHooks/useSticky";
import React from "react";

export default function MainScreen() {
  const { isSticky, element } = useSticky();

  const linkList = [
    { navLinkId: "Intro", scrollToId: "homeContainer" },
    { navLinkId: "HowToPlay", scrollToId: "HowToPlayContainer" },
    { navLinkId: "Other", scrollToId: "OtherContainer" },
  ];

  return (
    <LogPage>
      <SuvNavProvider>
        <SubNavigation sticky={isSticky} linkList={linkList} />
        <article ref={element}>
          <SectionC />
          <HowToPlay />
          <SectionE />
        </article>
      </SuvNavProvider>
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
