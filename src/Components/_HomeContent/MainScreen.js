//component

import { LogPage } from "./styles/StyledNumScreen";

import React from "react";

import SubNavigation from "./SubNavigation";
import useSticky from "./CustomHooks/useSticky";
import SectionC from "./SectionC";
import HowToPlay from "./SecondScreen/SecondScreen";
import SectionE from "./ThirdScreen/SectionE";
import SuvNavProvider from "./CustomHooks/SubNavContext";

export default function MainScreen() {
  const { isSticky, element } = useSticky();

  const linkList = [
    { navLinkId: "Main", scrollToId: "homeContainer" },
    { navLinkId: "Game", scrollToId: "HowToPlayContainer" },
    { navLinkId: "Contact Us", scrollToId: "OtherContainer" },
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
