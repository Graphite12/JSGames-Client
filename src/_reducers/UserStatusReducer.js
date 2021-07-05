import { TYPES } from "../_actions/types";
import { initialState } from "./initialState";

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case TYPES.LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: !state.isLoggedIn,
        userInfo: payload.data,
      };

    case TYPES.REGISTE_SUCCESS:
      return { ...state, isLoggedIn: false };

    case TYPES.LOGOUT:
      return { ...state, isLoggedIn: false };

    default:
      return state;
  }
}
