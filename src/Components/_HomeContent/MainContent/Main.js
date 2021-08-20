//styled
import {
  SectionAContainer,
  SectionAHeader,
  SectionAContent,
  BounceHeader,
  CardBox,
  TextContent,
  CardInner,
  CardFront,
  CardBack,
  Img,
  TextScreen,
  AboutButton,
} from "../styles/StyledSection";
import pad1 from "../../../image/gamepad.png";
import pad2 from "../../../image/gamepad2.png";

//fontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBook, faSitemap } from "@fortawesome/free-solid-svg-icons";

//React Feature
import { useEffect, useState } from "react";
import { useSpring, animated, config } from "react-spring";
import { useDispatch, useSelector } from "react-redux";

import { flipIcon } from "../../../_actions/modalAndFlips_action";
import { useHistory } from "react-router-dom";

export default function Main() {
  const history = useHistory();
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
      <SectionAHeader>
        <BounceHeader>
          <span className="spring J">J</span>
          <span className="spring S1">S</span>
          <span className="spring G">G</span>
          <span className="spring A">A</span>
          <span className="spring M">M</span>
          <span className="spring E">E</span>
          <span className="spring S2">S</span>
        </BounceHeader>
      </SectionAHeader>

      {/* <Angle></Angle> */}
      <SectionAContent>
        <TextScreen>
          <TextContent>
            <header>
              <h1>
                재미를 추구하는 <br />
                웹페이지
              </h1>
            </header>
            <div className="about-btn">
              <AboutButton>자세히 알아보기</AboutButton>
            </div>
          </TextContent>
          {/* ) : (
            <TextContent>
              <div>
                <h1>재밌는 게임을 즐겨보세요</h1>
              </div>
            </TextContent>
          )}  */}
        </TextScreen>
        {/* <CardBox
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
        </CardBox> */}
      </SectionAContent>
    </SectionAContainer>
  );
}
