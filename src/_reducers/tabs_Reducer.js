import { TABS } from "../_actions/types";

const initialState = {
  activeTab: 0,
};

export default function tabs_Reducer(state = initialState, action) {
  switch (action.type) {
    case TABS.ACTIVE_TAB:
      return {
        ...state,
        activeTab: action.activeTab,
      };
    default:
      return state;
  }
}
