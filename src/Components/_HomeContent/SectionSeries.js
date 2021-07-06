import {
  StyledSectonA,
  StyledSectonB,
  StyledSectonC,
} from "./styles/StyledSection";

function SectionA() {
  return (
    <StyledSectonA>
      <h2>섹션 A</h2>
    </StyledSectonA>
  );
}

function SectionB() {
  return (
    <StyledSectonB>
      <h2>섹션 B</h2>
    </StyledSectonB>
  );
}

function SectionC() {
  return (
    <StyledSectonC>
      <h2>섹션C</h2>
    </StyledSectonC>
  );
}

export default { SectionA, SectionB, SectionC };
