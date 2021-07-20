import {
  Banners,
  StyledSectonA,
  StyledSectonB,
  StyledSectonC,
  Tutorials,
} from "./styles/StyledSection";

export default function SectionB() {
  return (
    <StyledSectonB>
      <Banners>dd</Banners>
      <Tutorials>
        {" "}
        <h2>섹션 B</h2>
      </Tutorials>
    </StyledSectonB>
  );
}
