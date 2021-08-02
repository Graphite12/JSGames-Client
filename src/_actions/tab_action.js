import { TABS } from "./types";

export const activeTabs = (tabs) => {
  return { type: TABS.ACTIVE_TAB, activeTab: tabs };
};
