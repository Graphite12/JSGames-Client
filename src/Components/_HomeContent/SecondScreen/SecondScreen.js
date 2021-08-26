import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSubNav } from "../CustomHooks/useSubNav";
import { StyledSectonD, SectionDScreen } from "../styles/StyledNumScreen";

export default function SecondScreen() {
  const [isSidebar, setSidebar] = useState(false);

  const slider = useRef(null);
  const refD = useSubNav("traget");
  return (
    <StyledSectonD ref={refD} id="HowToPlayContainer">
      <SectionDScreen></SectionDScreen>
    </StyledSectonD>
  );
}
