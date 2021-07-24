import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

//component
import Navigation from "../Components/Navigation";
import SectionA from "../Components/_HomeContent/SectionA";
import SectionC from "../Components/_HomeContent/SectionC";
import SectionD from "../Components/_HomeContent/SectionD";
import SectionE from "../Components/_HomeContent/SectionE";
import Footer from "../Components/Footer";
import SubNav from "../Components/_HomeContent/SubNav";
import NotFound from "./NotFound";
//styled
import { StyledHome } from "./styles/styeldHome";

export default function Home() {
  const dispatch = useDispatch();

  return (
    <StyledHome>
      <SectionA />
      <SectionC />
      <SectionD />
      <SectionE />
      <Footer />
    </StyledHome>
  );
}
