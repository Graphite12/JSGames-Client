import styled, { keyframes, css } from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import arcade1 from "../image/arcade1.jpg";
import arcade2 from "../image/arcade2.jpg";
import arcade3 from "../image/arcade3.png";

export const LogPage = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  background: white;
  z-index: 1;
`;

export const DefaultScreen = styled.div`
  width: 70%;
  height: 100%;
  background-color: whitesmoke;

  display: flex;
  flex-direction: column;
  align-items: center;

  z-index: 8;

  position: relative;
`;

//컴포넌트 C

export const StyledSectonC = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 90vh;
  background-image: url(${arcade3});
  background-size: cover;
  background-position: center;
  z-index: 1;
`;

export const ShowCase = styled.article`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 1fr);
  border: 1px solid black;
  width: 95%;
`;

export const ShowGameCard = styled.div`
  width: 250px;
  height: 350px;
  border: 1px solid black;
  background: brown;
`;

//컴포넌트 D

export const StyledSectonD = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-image: url(${arcade1});
  background-size: cover;
  height: 90vh;
  z-index: 1;
  position: relative;
`;

export const TabContainer = styled.div`
  display: flex;
  width: 97%;
  height: 85%;

  align-items: center;
  justify-content: center;

  position: relative;
  top: 8%;
`;

export const TabList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 15%;
  height: 100%;
  border-radius: 20px;
  background: whitesmoke;

  position: absolute;
  left: 0;
  top: 0%;
`;

export const TabMenu = styled.li`
  margin: 10% 0;

  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    color: whitesmoke;
  }
`;

export const TabsContents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1% 2%;
  width: 83%;
  height: 100%;
  border: 1px solid black;

  position: absolute;
  right: 1%;
  @supports (backdrop-filter: blur(50px)) or
    (--webkit-backdrop-filter: blur(50px)) {
    & {
      background-color: rgba(255, 255, 255, 0.2);
      border: 1px solid rgba(255, 255, 255, 0.2);

      backdrop-filter: blur(20px);
    }
  } ;
`;

/*게임 가이드 캐러셀 Styiling */
/* 공통 스타일 */
export const GuideContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 99%;
  height: 100%;
  padding: 2% 2%;
`;

export const CarouselBtnBox = styled.div`
  display: flex;
`;

export const StyledSlider = styled(Slider)`
  height: 90%;

  .slick-list {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    overflow-x: hidden;
    background: green;
  }

  .slick-slide div {
    /* cursor: pointer; */
  }

  .slick-dots {
    bottom: 20px;
    margin-top: 200px;
  }

  .slick-track {
    width: 100%;
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
  background: orange;
  height: 100vh;
  z-index: 1;
`;
