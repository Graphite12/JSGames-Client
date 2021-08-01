import { useState } from "react";
import {
  StyledSectonC,
  StyledSectonD,
  StyledSectonE,
  DefaultScreen,
  TabList,
  Tabs,
  TabsContent,
  TabContainer,
} from "./styles/StyledSectionCDE";

const tabTitle = ["테트리스", "틱텍토", "팩맨", "메모리즈", "스네이크"];

const tabContent = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
};

export default function SectionD() {
  return (
    <StyledSectonD>
      <DefaultScreen>
        <TabContainer>
          <TabList></TabList>
          <TabsContent>dd</TabsContent>
        </TabContainer>
      </DefaultScreen>
    </StyledSectonD>
  );
}
