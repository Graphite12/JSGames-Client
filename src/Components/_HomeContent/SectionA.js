//styled
import {
  PageContent,
  TabsBox,
  SectionAContainer,
  Angle,
  CardBox,
  Card,
  CardInner,
  CardFront,
  CardBack,
  Img,
  AContent,
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
  //cardFliping
  const [fliped, setFliped] = useState(false);

  const handleClick = (e) => {
    const index = parseInt(e.target.id, 0);
  };

  const flipCard = () => {
    setFliped(!fliped);
  };

  console.log(fliped);
  return (
    <SectionAContainer>
      <AContent>
        <div className="text_screen">
          {!fliped ? (
            <>
              <h1>즐거움을 추구하는 게임홈페이지</h1>
              <div className="grid">ㅇㅇ</div>
              <button>시작하기</button>
            </>
          ) : (
            <>
              <div>
                <h1>dsajfasldkfjalsdkfjasldk;fjasdl;kfj</h1>
              </div>
            </>
          )}
        </div>
        <Angle></Angle>
        <CardBox onClick={flipCard}>
          <CardInner>
            <CardFront cardFliped={fliped ? "180deg" : "0deg"}>
              <Img src={pad1} />
            </CardFront>
            <CardBack cardFliped={fliped ? "0deg" : "-180deg"}>
              <Img src={pad2} />
            </CardBack>
          </CardInner>
        </CardBox>
      </AContent>
    </SectionAContainer>
  );
}
