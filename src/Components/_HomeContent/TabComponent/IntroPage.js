import { Tabs_Block, Tabs_Btn, Content, Tabs } from "./styles/StyledTabs";

const TABS = ["소개", "방법", "개요"];
export default function IntroPage(props) {
  const { activeTabs, setActiveTabs } = props;

  return (
    <Content active={activeTabs}>
      {TABS.map((tab) => (
        <Tabs>{tab}</Tabs>
      ))}
    </Content>
  );
}
