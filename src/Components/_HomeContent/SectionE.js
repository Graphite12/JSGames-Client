import {
  StyledSectonC,
  StyledSectonD,
  StyledSectonE,
  SectionEScreen,
} from "./styles/StyledSectionCDE";

import { useSubNav } from "./CustomHooks/useSubNav";

export default function SectionE() {
  const refE = useSubNav("Other");
  return (
    <StyledSectonE ref={refE} id="OtherContainer">
      <SectionEScreen>
        <h2>섹션E</h2>
      </SectionEScreen>
    </StyledSectonE>
  );
}
