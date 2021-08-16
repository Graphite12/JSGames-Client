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
        <LinkedUl>
          {linkList.map(({ navLinkId, scrollToId }, idx) => (
            <NavLinks key={idx} navLinkId={navLinkId} scrollToId={scrollToId} />
          ))}
        </LinkedUl>
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
    <LinkedLi>
      <Links
        to={`#${navLinkId}`}
        id={navLinkId}
        effect={activeNavLinkId}
        onClick={handleClick}
      >
        {navLinkId}
      </Links>
    </LinkedLi>
  );
};
export default SubNavigation;
