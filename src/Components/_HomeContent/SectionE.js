import {
  StyledSectonC,
  StyledSectonD,
  StyledSectonE,
  DefaultScreen,
} from "./styles/StyledSectionCDE";

import { useSubNav } from "./CustomHooks/useSubNav";

export default function SectionE() {
  const refE = useSubNav("Other");
  return (
    <StyledSectonE ref={refE} id="OtherContainer">
      <DefaultScreen>
        <h2>섹션E</h2>
      </DefaultScreen>
    </StyledSectonE>
  );
}
