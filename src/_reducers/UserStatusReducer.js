import { TYPES } from "../_actions/types";

const initialState = {
  userInfo: null,
  token: localStorage.getItem("user_token"),
  isLoggedIn: null,
  modal: false,
  modalType: "",
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case TYPES.LOGIN_SUCCESS:
    case TYPES.REGISTE_SUCCESS:
      localStorage.setItem("user_token", payload.token);
      return { ...state, ...action.payload, isLoggedIn: true };

    case TYPES.LOGOUT:
      return { ...state, token: null, userinfo: null, isLoggedIn: false };

    default:
      return state;
  }
}
