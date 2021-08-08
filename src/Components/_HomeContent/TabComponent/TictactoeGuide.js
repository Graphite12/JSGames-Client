import {
  StyledSlider,
  TTTGuideContainer,
  CarouselBtnBox,
} from "../styles/StyledSectionCDE";
import { useRef } from "react";

export default function TictactoeGuide({ setting, target }) {
  return (
    <TTTGuideContainer>
      <h1>틱택토 가이드</h1>
      <StyledSlider ref={target} {...setting}>
        <div>1asdfasdfasdfas</div>
        <div>2fasdfasdfadsfasdf</div>
        <div>3sadfdsafasdfds</div>
      </StyledSlider>
    </TTTGuideContainer>
  );
}
