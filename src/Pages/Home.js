import React from "react";

//component

import Main from "../Components/_HomeContent/MainContent/Main";
import MainScreen from "../Components/_HomeContent/MainScreen";

import Footer from "./Footer";
import NotFound from "./NotFound";
//styled
import { StyledHome } from "./styles/styeldHome";

export default function Home() {
  return (
    <StyledHome>
      <Main />
      <MainScreen />
      <Footer />
    </StyledHome>
  );
}
