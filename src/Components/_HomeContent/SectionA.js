//styled
import {
  SectionAContainer,
  Angle,
  CardBox,
  TextContent,
  CardInner,
  CardFront,
  CardBack,
  Img,
  AContent,
  TextScreen,
  AboutButton,
} from "./styles/StyledSection";
import pad1 from "../../image/gamepad.png";
import pad2 from "../../image/gamepad2.png";

//fontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBook, faSitemap } from "@fortawesome/free-solid-svg-icons";

//React Feature
import { useEffect, useState } from "react";
import { useSpring, animated, config } from "react-spring";

export default function SectionA() {
  const calc = (x, y) => [
    -(y - window.innerHeight / 2) / 30,
    (x - window.innerWidth / 2) / 30,
    1.1,
  ];
  const trans = (x, y, s) =>
    `perspective(1000px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

  const [hover, setHover] = useSpring(() => ({
    xys: [0, 0, 1],
    config: config.default,
  }));

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
            <TextContent>
              <header>
                <h1>
                  재미를 추구하는 게임
                  <br />
                  웹페이지
                </h1>
              </header>

              <AboutButton>자세히 알아보기</AboutButton>
            </TextContent>
          ) : (
            <TextContent>
              <div>
                <h1>이 게임은 대박입니다</h1>
              </div>
            </TextContent>
          )}
        </TextScreen>
        {/* <Angle></Angle> */}
        <CardBox
          onClick={flipCard}
          onMouseMove={({ clientX: x, clientY: y }) =>
            setHover({ xys: calc(x, y) })
          }
          onMouseLeave={() => setHover({ xys: [0, 0, 1] })}
          style={{
            transform: hover.xys.interpolate(trans),
          }}
        >
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
