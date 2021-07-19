import { TYPES } from "../_actions/types";

const initialState = {
  userInfo: null,

  isLoggedIn: null,

  modalType: "",
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case TYPES.SET_USERINFO:
      return { ...state, isLoggedIn: true, userInfo: payload };

    case TYPES.LOGIN_SUCCESS:
    case TYPES.REGISTE_SUCCESS:
      return { ...state, isLoggedIn: true };

    case TYPES.LOGOUT:
      return { ...state, token: null, userinfo: null, isLoggedIn: false };

    default:
      return state;
  }
}
