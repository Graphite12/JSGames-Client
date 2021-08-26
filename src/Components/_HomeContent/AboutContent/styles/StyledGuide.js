import styled, { keyframes, css } from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const GuideContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
/*틱택토 스타일링 */
export const TTTGuideContainer = styled(GuideContainer)``;

/*테트리스 스타일링 */
export const TetrisGuideContainer = styled(GuideContainer)``;
export const AGuideContainer = styled(GuideContainer)``;
export const BGuideContainer = styled(GuideContainer)``;
export const CGuideContainer = styled(GuideContainer)``;

export const StyledSlider = styled(Slider)`
  height: 100%;
  width: 100%;
  z-index: 7;

  .slick-list {
    width: 100%;
    height: 100%;

    // overflow-x: hidden;
    background: whitesmoke;
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
