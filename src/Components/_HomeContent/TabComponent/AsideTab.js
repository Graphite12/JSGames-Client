import { useState } from "react";
import { Tabs_Block, Tabs_Btn } from "./styles/StyledTabs";

export default function AsideTabs(props) {
  const { activeTabs, setActiveTabs } = props;
  const TABS = ["소개", "방법", "개요"];
  console.log(activeTabs);
  return (
    <Tabs_Block>
      {TABS.map((tab, idx) => (
        <Tabs_Btn
          active={activeTabs === idx}
          onClick={() => setActiveTabs(idx)}
        >
          {tab}
        </Tabs_Btn>
      ))}
    </Tabs_Block>
  );
}
