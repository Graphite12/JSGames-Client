import {
  StyledSectonC,
  StyledSectonD,
  StyledSectonE,
} from "./styles/StyledSectionCDE";
import SubNav from "./SubNav";

export default function SectionC() {
  return (
    <StyledSectonC>
      <SubNav />
      <h2>개요</h2>
      <div>React, JS로 구현한 웹 게임을 체험 해 보세요.</div>
    </StyledSectonC>
  );
}
