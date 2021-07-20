//styled
import {
  PageContent,
  TabsBox,
  SectionAContainer,
  SideBox,
  CardBox,
  Card,
  CardInner,
  CardFront,
  CardBack,
  Img,
} from "./styles/StyledSection";
import pad1 from "../../image/gamepad.png";
import pad2 from "../../image/gamepad2.png";
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
      <CardBox>
        <CardInner>
          <CardFront>
            <Img src={pad1} />
          </CardFront>
          <CardBack>
            <Img src={pad2} />
          </CardBack>
        </CardInner>
      </CardBox>
    </SectionAContainer>
  );
}
