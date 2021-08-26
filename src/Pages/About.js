import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { activeTabs } from "../_actions/tab_action";
import { useSubNav } from "../Components/_HomeContent/CustomHooks/useSubNav";
import {
  StyledSectonD,
  SectionDScreen,
  TabMenu,
  TabsContents,
  TabSideBar,
  TabMenuBox,
  TabContainer,
  ToggleBox,
  TabItems,
  TabIcon,
  TabText,
} from "./styles/styledAbout";

import FrontEnd from "../Components/_HomeContent/AboutContent/FrontEnd";
import BackEnd from "../Components/_HomeContent/AboutContent/BackEnd";
import Other1 from "../Components/_HomeContent/AboutContent/Other1";
import Other2 from "../Components/_HomeContent/AboutContent/Other2";
import { FontAwesomeIcon as FIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faBars,
  faThLarge,
  faBorderAll,
  faSdCard,
} from "@fortawesome/free-solid-svg-icons";

//icon

// import tet from "../image/about_icon/tetris.png";
// import ttt from "../image/about_icon/tictactoe.png";
// import mem from "../image/about_icon/memory.png";
// import pac from "../image/about_icon/pacman.png";
//Spring(animation) Option

const settings = {
  dots: true, // 슬라이드 밑에 점 보이게
  infinite: true, // 무한으로 반복
  arrows: false,
  speed: 500,
  autoplay: false,
  autoplaySpeed: 2000, // 넘어가는 속도
  slidesToShow: 1, // 4장씩 보이게
  slidesToScroll: 1, // 1장씩 뒤로 넘어가게
  centerMode: true,
  centerPadding: "0px", // 0px 하면 슬라이드 끝쪽 이미지가 안잘림
};

export default function HowToPlay() {
  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.tabs_Reducer.activeTab);
  // console.log(useSelector((state) => state.tabs_Reducer.activeTab));

  const [isSidebar, setSidebar] = useState(false);

  const slider = useRef(null);

  const refTarget = (tg) => {
    slider.current = tg;
  };
  const nextBtn = () => {
    slider.current.slickNext();
  };

  const prevBtn = () => {
    slider.current.slickPrev();
  };

  useEffect(() => {
    const updateWindowWidth = () => {
      if (window.innerWidth < 1300) setSidebar(true);
      else setSidebar(false);
    };

    window.addEventListener("resize", updateWindowWidth);

    return () => window.removeEventListener("resize", updateWindowWidth);
  }, [isSidebar]);

  const tabTitle = [
    { name: "프론트엔드", icon: "" },
    { name: "백엔드", icon: "" },
    { name: "기타1", icon: "" },
    { name: "기타2", icon: "" },
  ];

  const tabContent = {
    0: <FrontEnd setting={settings} target={refTarget} />,
    1: <BackEnd setting={settings} target={refTarget} />,
    2: <Other1 setting={settings} target={refTarget} />,
    3: <Other2 setting={settings} target={refTarget} />,
  };

  return (
    <StyledSectonD id="HowToPlayContainer">
      <SectionDScreen>
        <TabSideBar isSidebar={isSidebar}>
          <ToggleBox onClick={() => setSidebar(!isSidebar)}>
            {isSidebar ? <FIcon icon={faTimes} /> : <FIcon icon={faBars} />}
          </ToggleBox>
          <TabMenuBox isSidebar={isSidebar}>
            {tabTitle.map((menu, idx) => (
              <TabMenu key={idx} onClick={() => dispatch(activeTabs(idx))}>
                {
                  <TabItems isSidebar={isSidebar}>
                    <TabIcon isSidebar={isSidebar} src={menu.icon} />
                    <TabText isSidebar={isSidebar}>{menu.name}</TabText>
                  </TabItems>
                }
              </TabMenu>
            ))}
          </TabMenuBox>
        </TabSideBar>
        <TabsContents isSidebar={isSidebar}>
          {tabContent[activeTab]}
          <div className="btn-box">
            <span className="left">
              <button onClick={prevBtn} className="prev-btn">
                이전
              </button>
            </span>
            <span className="right">
              <button onClick={nextBtn} className="next-btn">
                다음
              </button>
            </span>
          </div>
        </TabsContents>
      </SectionDScreen>
    </StyledSectonD>
  );
}
