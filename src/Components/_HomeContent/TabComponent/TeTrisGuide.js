import {
  StyledSlider,
  TetrisGuideContainer,
  CarouselBtnBox,
} from "../styles/StyledSectionCDE";
import { useRef } from "react";

export default function TetrisGuide({ setting, pb, nb, target }) {
  return (
    <TetrisGuideContainer>
      <h1>테트리스 가이드</h1>
      <StyledSlider ref={target} {...setting}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
      </StyledSlider>
      <CarouselBtnBox>
        <button onClick={pb}>이전</button>
        <button onClick={nb}>다음</button>
      </CarouselBtnBox>
    </TetrisGuideContainer>
  );
}
