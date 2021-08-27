import styled, { keyframes, css } from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import gmail from "../image/gmail-grid.png";
import arcade2 from "../image/arcade2.jpg";
import arcade3 from "../image/arcade3.jpg";

import ppb from "../image/purpleblue.jpg";
import db from "../image/darkblue.jpg";

export const LogPage = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  background: white;
  z-index: 1;
`;

export const DefaultScreen = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 5;
`;

export const DefaultImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 4;
`;

//컴포넌트 C

export const StyledSectonC = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 70vh;
  background: rgb(221, 221, 221);
  // background-image: url(${db});
  // background-size: cover;

  z-index: 1;
  position: relative;
`;

export const SectionCScreen = styled(DefaultScreen)`
  height: 50%;
  width: 40%;
  position: absolute;
  left: 17%;
  top: 10%;
  background: none;

  header {
    margin-top: 10%;
    padding: 1% 7%;
  }
  header > h1 {
    font-size: 4rem;
  }
`;

export const SectionCImage = styled(DefaultImage)`
  height: 50%;
  width: 50%;
  position: absolute;
  right: 10%;
  top: 30%;

  img {
    width: 100%;
    height: 100%;
  }
`;
// export const ShowCase = styled.article`
//   display: grid;
//   grid-template-columns: repeat(5, 1fr);
//   grid-template-rows: repeat(2, 1fr);
//   border: 1px solid black;
//   width: 95%;
// `;

//컴포넌트 D

export const StyledSectonD = styled.section`
  display: flex;
  height: 90vh;
  background-image: url();
  background-size: contain;
  z-index: 3;
`;

export const SectionDScreen = styled(DefaultScreen)`
  height: 100%;
  width: 100%;

  align-items: none;
`;

// export const TabContainer = styled.div`
//   display: flex;
//   width: 100%;
//   height: 100%;

// `;

/*게임 가이드 캐러셀 Styiling */
/* 공통 스타일 */

//컴포넌트 E
export const StyledSectonE = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: #313438;
  height: 100vh;
  z-index: 1;
  position: relative;
  // background-image: url(${db});
  // background-size: cover;
`;

export const SectionEScreen = styled(DefaultScreen)`
  height: 100%;
  width: 90%;
  display: flex;
  flex-dircetion: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const ContacUsBox = styled.div`
  width: 50%;
  padding: 1%;
  background-image: linear-gradient(
    to bottom,
    #7c7c7c,
    #6d6d6d,
    #5f5f5f,
    #515151,
    #444444
  );
  text-align: center;

  p {
    font: bold 8rem arial, sans-serif;
    color: transparent;
    text-shadow: 2px 2px 3px rgba(255, 255, 255, 0.5);
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
  }
`;

export const Left_Box = styled.div`
  position: absolute;
  width: 40%;
  height: 65%;
  // border: 1px solid white;
  left: 10%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    text-align: center;
    font-size: 5rem;
    font-weight: bolder;
    color: whitesmoke;

    margin-bottom: 5%;
  }
`;

export const Monitor = styled.div`
  width: 350px;
  height: 240px;
  display: block;
  margin: 0 auto;
  border-radius: 10px 10px 0px 0px;
  padding: 8px;
  border: 1.5px solid #e0e2e2;
  background-color: black;

  .laptop_screen {
    width: 100%;
    height: 95%;
    display: block;
    position: relative;
    background: url(${gmail});
    background-size: cover;
    background-position: center;
  }

  .task_bar {
    width: 100%;
    height: 5%;
    background: whitesmoke;
  }
`;

export const Body = styled.div`
  width: 420px;
  height: 15px;
  display: block;
  background: #e0e2e2;
  margin: 0 auto;
  border-radius: 0px 0px 8px 8px;
`;

export const Right_Box = styled.div`
  position: absolute;
  width: 40%;
  height: 70%;
  border: 1px solid white;
  right: 10%;

  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    text-align: center;
    font-size: 2rem;
    font-weight: bolder;
    color: whitesmoke;
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 80%;

  input {
    width: 100%;
    height: 45px;
    margin-top: 2%;
    padding: 1.5% 2%;

    font-size: 1.2rem;
  }

  textarea {
    width: 100%;
    height: 200px;
    margin-top: 5%;
    padding: 1%;
    font-size: 1.1rem;
  }

  button {
    margin-top: 5%;

    width: 300px;
    height: 40px;
    font-size: 1.2rem;
    font-weight: bold;
  }
`;
