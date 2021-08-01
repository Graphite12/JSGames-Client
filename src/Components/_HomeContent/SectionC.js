import {
  StyledSectonC,
  DefaultScreen,
  ShowCase,
  ShowGameCard,
} from "./styles/StyledSectionCDE";

export default function SectionC() {
  return (
    <>
      <StyledSectonC>
        <DefaultScreen>
          <h2>React로 구현된 게임들을 만나보세요.</h2>
          <ShowCase>
            <ShowGameCard>dd</ShowGameCard>
            <ShowGameCard>dd</ShowGameCard>
            <ShowGameCard>dd</ShowGameCard>
            <ShowGameCard>dd</ShowGameCard>
            <ShowGameCard>dd</ShowGameCard>
            <ShowGameCard>dd</ShowGameCard>
          </ShowCase>
        </DefaultScreen>
      </StyledSectonC>
    </>
  );
}
