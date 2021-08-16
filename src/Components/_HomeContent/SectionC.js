import {
  StyledSectonC,
  DefaultScreen,
  SectionCScreen,
} from "./styles/StyledSectionCDE";

import { useSubNav } from "./CustomHooks/useSubNav";

export default function SectionC() {
  const refC = useSubNav("Target");

  return (
    <StyledSectonC ref={refC} id="homeContainer">
      <SectionCScreen>
        <header>
          <h1>
            React로 구현된 <br />
            게임들을 만나보세요.
          </h1>
        </header>
      </SectionCScreen>
    </StyledSectonC>
  );
}
