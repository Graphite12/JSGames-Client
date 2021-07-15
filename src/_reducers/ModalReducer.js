import { TYPES } from "../_actions/types";

const initialState = {
  isModal: false,
};
export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case TYPES.SHOW_MODAL:
      return { ...state, isModal: true };

    case TYPES.HIDE_MODAL:
      return { ...state, isModal: false };

    default:
      return state;
  }
}
