import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import {
  Banners,
  StyledSectonA,
  StyledSectonB,
  StyledSectonC,
  Sub_Navigation,
  SubNavContainer,
  LinkedUl,
  LinkedLi,
  Links,
} from "./styles/SubNav";

export default function SubNav({ Sticky }) {
  return (
    <Sub_Navigation Sticky={Sticky}>
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
