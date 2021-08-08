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
import { useDispatch, useSelector } from "react-redux";

import { flipIcon } from "../../_actions/modalAndFlips_action";

export default function SectionA() {
  const dispatch = useDispatch();
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

  const { isIconFlips } = useSelector((state) => state.modalAndFlips_Reducer);
  const fliped = () => {
    dispatch(flipIcon());
  };

  return (
    <SectionAContainer>
      <AContent>
        <TextScreen>
          {!isIconFlips ? (
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
                <h1>재밌는 게임을 즐겨보세요</h1>
              </div>
            </TextContent>
          )}
        </TextScreen>
        {/* <Angle></Angle> */}
        <CardBox
          onClick={fliped}
          onMouseMove={({ clientX: x, clientY: y }) =>
            setHover({ xys: calc(x, y) })
          }
          onMouseLeave={() => setHover({ xys: [0, 0, 1] })}
          style={{
            transform: hover.xys.interpolate(trans),
          }}
        >
          <CardInner>
            <CardFront cardFliped={isIconFlips ? "180deg" : "0deg"}>
              <Img src={pad1} />
            </CardFront>
            <CardBack cardFliped={isIconFlips ? "0deg" : "-180deg"}>
              <Img src={pad2} />
            </CardBack>
          </CardInner>
        </CardBox>
      </AContent>
    </SectionAContainer>
  );
}
