//styled
import {
  PageContent,
  TabsBox,
  SectionAContainer,
  SideBox,
} from "./styles/StyledSection";

//fontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBook, faSitemap } from "@fortawesome/free-solid-svg-icons";

//React Feature
import { useState } from "react";
import AsideTabs from "./TabComponent/AsideTab";
import IntroPage from "./TabComponent/IntroPage";
//   <AsideTabs activeTabs={activeTabs} setActiveTabs={setActiveTabs} />
//<IntroPage activeTabs={activeTabs} setActiveTabs={setActiveTabs} />
export default function SectionA() {
  const [click, setClick] = useState(0);
  const [activeTabs, setActiveTabs] = useState(1);

  const handleClick = (e) => {
    const index = parseInt(e.target.id, 0);
  };

  return (
    <SectionAContainer>
      <TabsBox></TabsBox>
    </SectionAContainer>
  );
}
