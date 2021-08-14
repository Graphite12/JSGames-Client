import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { activeTabs } from "../../_actions/tab_action";
import { useSubNav } from "./CustomHooks/useSubNav";
import {
  StyledSectonD,
  DefaultScreen,
  TabList,
  TabMenu,
  TabsContents,
  TabContainer,
} from "./styles/StyledSectionCDE";
import MemorysGuide from "./TabComponent/MemorysGuide";
import SnakeGuide from "./TabComponent/SnakeGuide";
import TetrisGuide from "./TabComponent/TeTrisGuide";
import TictactoeGuide from "./TabComponent/TictactoeGuide";

//Spring(animation) Option

const settings = {
  dots: true, // 슬라이드 밑에 점 보이게
  infinite: true, // 무한으로 반복
  speed: 500,
  autoplay: false,
  autoplaySpeed: 2000, // 넘어가는 속도
  slidesToShow: 1, // 4장씩 보이게
  slidesToScroll: 1, // 1장씩 뒤로 넘어가게
  centerMode: true,
  centerPadding: "0px", // 0px 하면 슬라이드 끝쪽 이미지가 안잘림
};

export default function SectionD() {
  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.tabs_Reducer.activeTab);
  // console.log(useSelector((state) => state.tabs_Reducer.activeTab));

  const slider = useRef(null);
  const refD = useSubNav("");

  const refTarget = (tg) => {
    slider.current = tg;
  };
  const nextBtn = () => {
    slider.current.slickNext();
  };

  const prevBtn = () => {
    slider.current.slickPrev();
  };

  const tabTitle = ["테트리스", "틱택토", "메모리즈", "스네이크"];

  const tabContent = {
    0: <TetrisGuide setting={settings} target={refTarget} />,
    1: <TictactoeGuide setting={settings} target={refTarget} />,
    2: <MemorysGuide setting={settings} target={refTarget} />,
    3: <SnakeGuide setting={settings} target={refTarget} />,
  };

  return (
    <StyledSectonD ref={refD} id="HowToPlayContainer">
      <DefaultScreen>
        <TabContainer>
          <TabList>
            {tabTitle.map((menu, idx) => (
              <TabMenu key={idx} onClick={() => dispatch(activeTabs(idx))}>
                {menu}
              </TabMenu>
            ))}
          </TabList>
          <TabsContents>
            {tabContent[activeTab]}
            <button onClick={nextBtn}>다음</button>
            <button onClick={prevBtn}>이전</button>
          </TabsContents>
        </TabContainer>
      </DefaultScreen>
    </StyledSectonD>
  );
}
