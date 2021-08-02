import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { activeTabs } from "../../_actions/tab_action";
import {
  StyledSectonD,
  DefaultScreen,
  TabList,
  TabMenu,
  TabContainer,
} from "./styles/StyledSectionCDE";
import TetrisGuide from "./TabComponent/TeTrisGuide";
import TictactoeGuide from "./TabComponent/TictactoeGuide";

const tabTitle = ["테트리스", "틱텍토", "팩맨", "메모리즈", "스네이크"];

const tabContent = {
  0: <TetrisGuide />,
  1: <TictactoeGuide />,
  2: 3,
  3: 4,
};

export default function SectionD() {
  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.tabs_Reducer.activeTab);
  console.log(useSelector((state) => state.tabs_Reducer.activeTab));

  return (
    <StyledSectonD>
      <DefaultScreen>
        <TabContainer>
          <TabList>
            {tabTitle.map((menu, idx) => (
              <TabMenu key={idx} onClick={() => dispatch(activeTabs(idx))}>
                {menu}
              </TabMenu>
            ))}
          </TabList>
          {tabContent[activeTab]}
          {console.log(tabContent[activeTab])}
        </TabContainer>
      </DefaultScreen>
    </StyledSectonD>
  );
}
