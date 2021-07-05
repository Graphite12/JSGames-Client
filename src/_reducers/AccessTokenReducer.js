import { initialState } from "./initialState";
import { TYPES } from "../_actions/types";

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case TYPES.ACCESS_TOKEN:
      return { ...state, accessToken: payload.accessToken };
    default:
      return state;
  }
}
