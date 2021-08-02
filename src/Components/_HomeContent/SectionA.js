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
  TextScreen,
} from "./styles/StyledSection";
import pad1 from "../../image/gamepad.png";
import pad2 from "../../image/gamepad2.png";

//fontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBook, faSitemap } from "@fortawesome/free-solid-svg-icons";

//React Feature
import { useEffect, useState } from "react";

export default function SectionA() {
  const [click, setClick] = useState(0);
  const [activeTabs, setActiveTabs] = useState(1);
  //cardFliping
  const [fliped, setFliped] = useState(false);

  const flipCard = () => {
    setFliped(!fliped);
  };

  return (
    <SectionAContainer>
      <AContent>
        <TextScreen>
          {!fliped ? (
            <>
              <header>
                <h1>재미를 추구하는 게임홈페이지</h1>
              </header>
              <div className="grid">ㅇㅇ</div>
              <button>시작하기</button>
            </>
          ) : (
            <>
              <div>
                <h1>이 게임은 대박입니다</h1>
              </div>
            </>
          )}
        </TextScreen>
        {/* <Angle></Angle> */}
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
