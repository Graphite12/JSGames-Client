//styled
import {
  StyledSectonA,
  Howtouse,
  Contents,
  Introduce,
  PageBtnBox,
  PageBtn,
  Content,
  SectionAContainer,
} from "./styles/StyledSection";

//fontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBook, faSitemap } from "@fortawesome/free-solid-svg-icons";

//React Feature
import { useState } from "react";

export default function SectionA() {
  const [click, setClick] = useState(0);

  const handleClick = (e) => {
    const index = parseInt(e.target.id, 0);
    console.log(e.target.className);
    if (index !== click) {
      setClick(index);
    }
  };

  return (
    <StyledSectonA>
      <SectionAContainer>
        <PageBtnBox>
          <FontAwesomeIcon
            icon={faHome}
            onClick={handleClick}
            click={click === 0}
            id={0}
          ></FontAwesomeIcon>
          <FontAwesomeIcon
            icon={faHome}
            icon={faHome}
            click={click === 1}
            id={1}
          ></FontAwesomeIcon>
          <FontAwesomeIcon
            icon={faHome}
            onClick={handleClick}
            click={click === 2}
            id={2}
          ></FontAwesomeIcon>
        </PageBtnBox>
        <>
          <Content click={click === 0}>
            <Introduce>
              <h1>소개하는 페이지</h1>
            </Introduce>
          </Content>
          <Content click={click === 1}>
            <Howtouse>
              <h1>게임 플레이 방법</h1>
            </Howtouse>
          </Content>
          <Content click={click === 2}>
            <Contents>
              <h1>제공하는 컨텐츠들</h1>
            </Contents>
          </Content>
        </>
      </SectionAContainer>
    </StyledSectonA>
  );
}
