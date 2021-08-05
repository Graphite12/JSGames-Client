import {
  StyledSlider,
  TTTGuideContainer,
  CarouselBtnBox,
} from "../styles/StyledSectionCDE";
import { useRef } from "react";

export default function TictactoeGuide({ setting, pb, nb, target }) {
  return (
    <TTTGuideContainer>
      <h1>틱택토 가이드</h1>
      <StyledSlider ref={target} {...setting}>
        <div>1asdfasdfasdfas</div>
        <div>2fasdfasdfadsfasdf</div>
        <div>3sadfdsafasdfds</div>
      </StyledSlider>
      <CarouselBtnBox>
        <button onClick={pb}>이전</button>
        <button onClick={nb}>다음</button>
      </CarouselBtnBox>
    </TTTGuideContainer>
  );
}
