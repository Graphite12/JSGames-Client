import styled, { keyframes, css } from "styled-components";
import steamImg from "../../../image/background.png";
// import { HashLink as Link } from "react-router-dom";
//Section A

export const SectionAContainer = styled.section`
  width: 100%;
  height: 105vh;
  margin: 0;
  background: url(${steamImg});
`;

export const Angle = styled.div`
  top: -25%;
  height: 170%;
  width: 40%;
  background: white;

  right: 3%;
  position: absolute;
  transform: rotate(15deg);
  z-index: 2;
`;

export const AContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  flex-wrap: wrap;
  background: rgba(231, 231, 231, 0.5);
  width: 100%;
  height: 100%;
  z-index: 1;
`;

export const TabsBox = styled.aside`
  display: flex;
  flex-direction: row;
  width: 60%;
  background: white;
  height: 90%;
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
  width: 30%;
  height: 70%;
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

/**
 *
 * 컨텐츠 컴포넌트
 *
 */

/**
 * B컴포넌트
 */

export const StyledSectonB = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 70vh;
  z-index: 2;
  background: #f4f9f9;
`;

export const Tutorials = styled.div`
  height: 100%;
  width: 100%;
  background-image: linear-gradient(
    to right bottom,
    #ffc800,
    #fac100,
    #f5ba00,
    #f0b400,
    #ebad00
  );

  -webkit-box-shadow: rgb(0, 0, 0) 0px 10px 13px -7px,
    inset 0px -9px 11px 0px rgba(66, 52, 0, 0);
  box-shadow: rgb(0, 0, 0) 0px 10px 13px -7px,
    inset 0px -9px 11px 0px rgba(66, 52, 0, 0);
`;

export const Banners = styled.div`
  display: flex;
  left: 70px;
  width: 15%;
  height: 72%;
  background-image: linear-gradient(
    to bottom,
    #ff9b00,
    #fc9400,
    #fa8d00,
    #f78600,
    #f47f00
  );

  -webkit-box-shadow: -3px 4px 8px 0px #423400;
  box-shadow: -3px 4px 8px 0px #423400;
  position: absolute;
`;

export const StyledSectonC = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
