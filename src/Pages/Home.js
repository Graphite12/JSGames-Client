import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

//component

import SectionA from "../Components/_HomeContent/SectionA";

import Footer from "../Components/Footer";
import NotFound from "./NotFound";
//styled
import { StyledHome } from "./styles/styeldHome";
import NextPage from "../Components/_HomeContent/SG";

export default function Home() {
  const dispatch = useDispatch();

  return (
    <StyledHome>
      <SectionA />
      <NextPage />
      <Footer />
    </StyledHome>
  );
}
