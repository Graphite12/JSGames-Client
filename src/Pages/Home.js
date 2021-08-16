import React from "react";

//component

import SectionA from "../Components/_HomeContent/SectionA";

import Footer from "./Footer";
import NotFound from "./NotFound";
//styled
import { StyledHome } from "./styles/styeldHome";
import MainScreen from "../Components/_HomeContent/MainScreen";

export default function Home() {
  return (
    <StyledHome>
      <SectionA />
      <MainScreen />
      <Footer />
    </StyledHome>
  );
}
