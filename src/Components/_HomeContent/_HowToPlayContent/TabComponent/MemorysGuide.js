import { CarouselBtnBox } from "../../styles/StyledSectionCDE";
import {
  StyledSlider,
  TTTGuideContainer,
  AGuideContainer,
} from "./styles/StyledGuide";

export default function MemorysGuide({ setting, pb, nb, target }) {
  return (
    <AGuideContainer>
      <StyledSlider ref={target} {...setting}>
        <h1>메모리 가이드</h1>
        <h2>준비 중입니다....</h2>
      </StyledSlider>
    </AGuideContainer>
  );
}
