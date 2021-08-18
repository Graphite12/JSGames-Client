import styled, { keyframes, css } from "styled-components";
import { useSpring, animated, config } from "react-spring";
import steamImg from "../../../image/bg.jpg";
import arcade1 from "../image/arcade1.jpg";
// import { HashLink as Link } from "react-router-dom";
//Section A

export const SectionAContainer = styled.section`
  width: 100%;
  height: 100vh;
  margin: 0;
  background: url(${arcade1});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
`;

// export const Angle = styled.div`
//   top: -30%;
//   height: 140%;
//   width: 70%;
//   background-image: linear-gradient(
//     to right bottom,
//     #35d314,
//     #31cc1e,
//     #2dc525,
//     #2abe2a,
//     #28b72e,
//     #26b42d,
//     #23b02b,
//     #21ad2a,
//     #1dac24,
//     #19ab1c,
//     #14a914,
//     #0ea807
//   );
//   -webkit-box-shadow: -11px 4px 16px 1px #000000;
//   box-shadow: -11px 4px 16px 1px #000000;
//   right: -30%;
//   position: absolute;
//   transform: rotate(-20deg);
//   z-index: 2;
//   transition: linear 0.2s;

//   @media screen and (max-width: 1080px) {
//     ovflow-x: none;
//     transform: rotate(0deg);
//     transition: linear 0.2s;
//     width: 40%;
//     right: 0%;
//   }

//   @media screen and (max-width: 700px) {
//     ovflow-x: none;

//     transition: linear 0.2s;
//     top: 65%;
//     width: 100%;
//     height: 50%;
//     right: 0%;
//   } ;
// `;

export const SectionAHeader = styled.header`
  width: 100%;
  height: 40%;
  background: rgb(138, 138, 138);
  position: relative;

  top: 12%;

  display: flex;
  justify-content: center;
`;

//header
export const BounceHeader = styled.div`
  position: absolute;
  width: 100%;
  text-align: center;
  top: 20%;

  .spring {
    font-size: 10rem;
    font-weight: bold;
    margin: 0 2%;
  }

  .J {
    color: whitesmoke;
  }
  .S1 {
    color: whitesmoke;
  }
  .G {
    color: whitesmoke;
  }
  .A {
    color: orange;
  }
  .M {
    color: orange;
  }
  .E {
    color: orange;
  }
  .S2 {
    color: orange;
  }
`;

export const SectionAContent = styled.article`
  width: 100%;
  hieght: 40%;
  position: relative;

  top: 15%;
`;
/**
 *
 * Flip 스타일 컴포넌트
 *
 */

export const CardBox = styled(animated.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15%;
  height: 25%;
  right: 5%;
  top: 15%;

  z-index: 2;

  position: absolute;
  cursor: pointer;
  perspective: 1000px;
  transition: all 0.1s ease-in-out;
  border-radius: 10px;

  -webkit-box-shadow: 0 4px 6px -6px #222;
  -moz-box-shadow: 0 4px 6px -6px #222;
  box-shadow: 0 7px 5px -6px #111;

  @supports (backdrop-filter: blur(30px)) or
    (--webkit-backdrop-filter: blur(30px)) {
    &:hover {
      background-color: rgba(255, 255, 255, 0.2);
      border: 1px solid rgba(255, 255, 255, 0.2);

      backdrop-filter: blur(20px);
      box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.7);
    }
  } ;
`;

export const CardInner = styled.div`
  width: 100%;
  height: 100%;
  transition: transform 0.5s;
  transform-style: preserve-3d;
  cursor: pointer;
  position: relative;
`;

export const CardSide = css`
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transition: all 0.55s ease-in-out;
  transform: ${(props) => `rotateY(${props.cardFliped})`};
`;

export const CardFront = styled.div`
  ${CardSide};

  transform: ${(props) => `rotateY(${props.cardFliped})`};
`;

export const CardBack = styled.div`
  ${CardSide};

  transform: ${(props) => `rotateY(${props.cardFliped})`};
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
`;

//왼쪽 텍스트 컨텐츠
export const TextScreen = styled.div`
  display: flex;
  flex-direction: column;
  transition: 0.2s linear;
  position: absolute;

  right: 10%;

  width: 50%;
  height: 100%;

  border-radius: 15px;
`;
export const TextContent = styled.div`
  width: 100%;
  height: 100%;

  header {
    transition: 0.55s ease-in-out;
  }
  h1 {
    color: whitesmoke;
    font-size: 5em;
    font-weight: 1000;
  }
  .about-btn {
    position: absolute;

    right: 30%;
  }
`;

export const AboutButton = styled.button`
  margin-top: 10%;

  width: 200px;
  height: 50px;
  border-radius: 20px;
  outline: none;
  border: none;

  color: rgba(5, 5, 5, 1);
  font-size: 1.4rem;
  font-weight: bold;

  cursor: pointer;
`;
