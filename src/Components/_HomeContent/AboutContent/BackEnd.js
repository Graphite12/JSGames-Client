import { CarouselBtnBox } from "../styles/StyledNumScreen";
import {
  StyledSlider,
  TTTGuideContainer,
  TetrisGuideContainer,
} from "./styles/StyledGuide";

import { useRef } from "react";

export default function BackEnd({ setting, pb, nb, target }) {
  return (
    <TetrisGuideContainer>
      <StyledSlider ref={target} {...setting}>
        <h1>백엔드는 이런식으로 구현했습니다.</h1>
      </StyledSlider>
    </TetrisGuideContainer>
  );
}
