import { TYPES } from "./types";

export function showModal() {
  return {
    type: TYPES.SHOW_MODAL,
  };
}

export function hideModal() {
  return {
    type: TYPES.HIDE_MODAL,
  };
}
