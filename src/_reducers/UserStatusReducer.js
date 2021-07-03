import { TYPES } from "../_actions/types";
import initialState from "./initialState";

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case TYPES.LOGIN_SUCCESS:
      return {
        ...state,
        isLogin: !state.isLogin,
        userForm: {
          email: payload.email,
          password: payload.password,
        },
      };
    // case LOGIN_FAILURE:
    //   return {
    //     ...state,
    //     isLogin: state.isLogin,
    //     userForm: null,
    //   };
    case TYPES.REGISTER_SUCCESS:
      return {
        ...state,
        isLogin: state.isLogin,
      };
    case TYPES.LOGOUT:
      return {
        ...state,
        isLogin: false,
        userForm: null,
      };

    default:
      return state;
  }
}
