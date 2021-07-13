import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

//component
import Navigation from "../Components/Navigation";
import SectionA from "../Components/_HomeContent/SectionA";
import SectionB from "../Components/_HomeContent/SectionB";
import SectionC from "../Components/_HomeContent/SectionC";
import Footer from "../Components/Footer";
import Profile from "../Components/UserForm/Porfile";
import NotFound from "./NotFound";
//styled
import { StyledHome } from "./styles/styeldHome";

export default function Home() {
  const dispatch = useDispatch();

  return (
    <StyledHome>
      <SectionA />
      <SectionB />
      <SectionC />
      <Footer />
    </StyledHome>
  );
}
