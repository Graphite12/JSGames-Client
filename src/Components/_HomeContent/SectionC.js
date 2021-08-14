import {
  StyledSectonC,
  DefaultScreen,
  ShowCase,
  ShowGameCard,
} from "./styles/StyledSectionCDE";

import { useSubNav } from "./CustomHooks/useSubNav";

export default function SectionC() {
  const refC = useSubNav("Target");

  return (
    <StyledSectonC ref={refC} id="homeContainer">
      <DefaultScreen>
        <h2>React로 구현된 게임들을 만나보세요.</h2>
        <ShowCase></ShowCase>
      </DefaultScreen>
    </StyledSectonC>
  );
}
