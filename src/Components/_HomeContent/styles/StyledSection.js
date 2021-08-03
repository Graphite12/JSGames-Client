import styled, { keyframes, css } from "styled-components";
import steamImg from "../../../image/background2.png";
// import { HashLink as Link } from "react-router-dom";
//Section A

export const SectionAContainer = styled.section`
  width: 100%;
  height: 80vh;
  margin: 0;
  background: url(${steamImg});
  background-size: cover;
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

export const AContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  flex-wrap: wrap;
  background: rgba(0, 0, 0, 0.54);
  width: 100%;
  height: 100%;
  z-index: 1;
`;

export const TabsBox = styled.aside`
  display: flex;
  flex-direction: row;
  width: 60%;
  background: white;
  height: 100%;
`;
export const PageContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  border: 1px solid blue;
  height: 90%;
  margin: 2%;
`;

export const Bounce = keyframes`
100% {
  top: -20px;

}
`;

/**
 *
 * Flip 스타일 컴포넌트
 *
 */

export const CardBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  height: 50%;
  top: 27%;
  right: 7%;
  z-index: 2;

  position: absolute;
  cursor: pointer;
  perspective: 1000px;
  transition: all 0.1s ease-in-out;
`;

export const CardInner = styled.div`
  width: 100%;
  height: 100%;
  top: -18%;
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
`;

export const AboutButton = styled.button`
  width: 150px;
  height: 70px;
  border-radius: 20px;
  outline: none;
`;

//왼쪽 컨텐츠
export const TextScreen = styled.article`
  position: absolute;
  left: 3%;
  top: 25%;
  display: flex;
  flex-direction: column;

  header {
    width: 57%;
  }
  h1 {
    color: white;
    font-size: 7em;
    font-weight: 1000;
  }
`;

/**
 *
 * 컨텐츠 컴포넌트
 *
 */

/**
 * B컴포넌트
 */
