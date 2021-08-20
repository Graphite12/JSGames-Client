import { CarouselBtnBox } from "../../styles/StyledSectionCDE";
import {
  StyledSlider,
  TTTGuideContainer,
  TetrisGuideContainer,
} from "./styles/StyledGuide";

import { useRef } from "react";

export default function TetrisGuide({ setting, pb, nb, target }) {
  return (
    <TetrisGuideContainer>
      <StyledSlider ref={target} {...setting}>
        <h1>테트리스 가이드</h1>
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </StyledSlider>
    </TetrisGuideContainer>
  );
}
