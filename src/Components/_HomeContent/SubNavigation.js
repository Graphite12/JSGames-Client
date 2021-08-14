import {
  Sub_Navigation,
  SubNavContainer,
  LinkedUl,
  LinkedLi,
  Links,
} from "./styles/StyledSubNav";

import React, { useContext } from "react";
import { SubNavContext } from "./CustomHooks/SubNavContext";

const SubNavigation = ({ sticky, linkList }) => {
  return (
    <Sub_Navigation sticky={sticky}>
      <SubNavContainer>
        <div>
          {linkList.map(({ navLinkId, scrollToId }, idx) => (
            <NavLinks key={idx} navLinkId={navLinkId} scrollToId={scrollToId} />
          ))}
        </div>
      </SubNavContainer>
    </Sub_Navigation>
  );
};

const NavLinks = ({ navLinkId, scrollToId }) => {
  const { activeNavLinkId, setActiveNavLinkId } = useContext(SubNavContext);

  const handleClick = () => {
    setActiveNavLinkId(navLinkId);
    document.getElementById(scrollToId).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div id={navLinkId} linkEffect={activeNavLinkId} onClick={handleClick}>
      {navLinkId}
    </div>
  );
};
export default SubNavigation;
