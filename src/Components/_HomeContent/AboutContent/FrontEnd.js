import { CarouselBtnBox } from "../styles/StyledNumScreen";
import { StyledSlider, TTTGuideContainer } from "./styles/StyledGuide";
import { useRef } from "react";

export default function FrontEnd({ setting, target }) {
  return (
    <TTTGuideContainer>
      <StyledSlider ref={target} {...setting}>
        <h1>프론트엔드는 이런 스택으로 구현했습니다.</h1>
      </StyledSlider>
    </TTTGuideContainer>
  );
}
