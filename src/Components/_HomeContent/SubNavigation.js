import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import {
  Sub_Navigation,
  SubNavContainer,
  LinkedUl,
  LinkedLi,
  Links,
} from "./styles/StyledSubNav";

export default function SubNavigation({ pos }) {
  const [navbarColor, setNavbarColor] = useState(false);

  const changeNavbarColor = () => {
    const scrollY = window.scrollY;
    console.log(scrollY);
    if (scrollY >= pos) {
      setNavbarColor(true);
    } else {
      setNavbarColor(false);
    }
  };

  useEffect(() => {
    changeNavbarColor();
    window.addEventListener("scroll", changeNavbarColor);
  }, []);

  return (
    <Sub_Navigation color={navbarColor} pos={pos}>
      <SubNavContainer>
        <LinkedUl>
          <LinkedLi>
            <Links to="/c">개요</Links>
          </LinkedLi>
          <LinkedLi>
            <Links to="/d">즐기는 방법</Links>
          </LinkedLi>
          <LinkedLi>
            <Links to="/e">게임</Links>
          </LinkedLi>
        </LinkedUl>
      </SubNavContainer>
    </Sub_Navigation>
  );
}
