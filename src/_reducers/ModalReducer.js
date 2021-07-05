import { TYPES } from "../_actions/types";
import { initialState } from "./initialState";

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case TYPES.TOGGLE_MODAL:
      return { ...state, modal: !state.modal };

    case TYPES.SET_MODALTYPE:
      return { ...state, modalType: payload.type };

    default:
      return state;
  }
}
