import styled, { keyframes, css } from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import arcade1 from "../image/arcade1.jpg";
import arcade2 from "../image/arcade2.jpg";
import arcade3 from "../image/arcade3.jpg";
import arcade4 from "../image/arcade5.jpg";
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
  background-image: url(${arcade4});
  background-size: contain;
  z-index: 3;
`;

export const SectionDScreen = styled(DefaultScreen)`
  height: 100%;
  width: 100%;
  position: relative;
  flex-direction: row;
  justify-content: flex-start;
  align-items: none;
`;

// export const TabContainer = styled.div`
//   display: flex;
//   width: 100%;
//   height: 100%;

// `;

export const ToggleBox = styled.div`
  position: absolute;
  margin: 0 auto;
  bottom: 10%;
  font-size: 2rem;
  z-index: 9;
  color: white;
`;

export const TabMenuBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  color: white;
  height: 50%;

  margin-top: ;
`;

export const TabSideBar = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: ${({ isSidebar }) => (isSidebar ? "5%" : "20%")};
  height: 100%;

  background: inherit;
  padding: 0 1%;
  max-width: 400px;
  min-width: 100px;
  position: relative;
  transition: ${({ isSidebar }) =>
    isSidebar ? " 0.2s linear all;" : "0.2s linear all;"};

  z-index: 8;

  header {
    margin-top: 25%;

    h1 {
      font-size: 2.5rem;
      font-weight: bold;
    }
  }
`;

export const TabMenu = styled.li`
  font-size: 2rem;
  font-weight: bold;
  cursor: pointer;
  margin-top: 30%;
  width: 100%;

  &:hover {
    color: whitesmoke;
  }
`;

export const TabItems = styled.span`
  display: flex;
  width: 100%;
  justify-content: ${({ isSidebar }) => (!isSidebar ? "flex-start" : "center")};
  align-items: "center" 

  top: 20%;
`;

export const TabIcon = styled.img`
  width: 3rem;
  margin-right: ${({ isSidebar }) => (isSidebar ? "0" : "15%")};
`;

export const TabText = styled.p`
  display: ${({ isSidebar }) => (isSidebar ? "none" : "inline")};
`;

export const TabsContents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: ${({ isSidebar }) => (isSidebar ? "95%" : "85%")};
  transition: 0.3ss linear all;
  height: 100%;

  // @supports (backdrop-filter: blur(50px)) or
  //   (--webkit-backdrop-filter: blur(50px)) {
  //   & {
  //     background-color: rgba(255, 255, 255, 0.2);
  //     border: 1px solid rgba(255, 255, 255, 0.2);

  //     backdrop-filter: blur(20px);
  //   }
  // } ;

  .btn-box {
    z-index: 9;
    position: absolute;
    top: 20%;
  }
`;

/*게임 가이드 캐러셀 Styiling */
/* 공통 스타일 */
export const GuideContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const CarouselBtnBox = styled.div`
  display: flex;
`;

export const StyledSlider = styled(Slider)`
  height: 100%;
  width: 100%;
  z-index: 7;
  .slick-list {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    overflow-x: hidden;
    background: green;
  }

  .slick-slide div {
    cursor: pointer;
  }

  .slick-dots {
    bottom: 20px;
    margin-top: 200px;
  }

  .slick-track {
  }
`;

/*틱택토 스타일링 */
export const TTTGuideContainer = styled(GuideContainer)``;

/*테트리스 스타일링 */
export const TetrisGuideContainer = styled(GuideContainer)``;

//컴포넌트 E
export const StyledSectonE = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: rgb(171, 171, 171, 0.7);
  height: 100vh;
  z-index: 1;
  position: relative;
  // background-image: url(${db});
  // background-size: cover;
`;

export const SectionEScreen = styled(DefaultScreen)`
  height: 100%;
`;
