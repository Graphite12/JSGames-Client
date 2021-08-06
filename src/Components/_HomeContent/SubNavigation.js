import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import {
  Sub_Navigation,
  SubNavContainer,
  LinkedUl,
  LinkedLi,
  Links,
} from "./styles/StyledSubNav";

const SubNavigation = ({ sticky }) => {
  return (
    <Sub_Navigation sticky={sticky}>
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
};

export default SubNavigation;
