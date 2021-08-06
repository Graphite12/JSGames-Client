import {
  StyledSectonC,
  DefaultScreen,
  ShowCase,
  ShowGameCard,
} from "./styles/StyledSectionCDE";

export default function SectionC({ element }) {
  return (
    <StyledSectonC>
      <DefaultScreen ref={element}>
        <h2>React로 구현된 게임들을 만나보세요.</h2>
        <ShowCase></ShowCase>
      </DefaultScreen>
    </StyledSectonC>
  );
}
