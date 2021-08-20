import { CarouselBtnBox } from "../../styles/StyledSectionCDE";
import { StyledSlider, TTTGuideContainer } from "./styles/StyledGuide";

import { useRef } from "react";

export default function TictactoeGuide({ setting, target }) {
  return (
    <TTTGuideContainer>
      <StyledSlider ref={target} {...setting}>
        <h1>틱택토 가이드</h1>
        <div>1asdfasdfasdfas</div>
        <div>2fasdfasdfadsfasdf</div>
        <div>3sadfdsafasdfds</div>
      </StyledSlider>
    </TTTGuideContainer>
  );
}
