import { TYPES } from "./types";

import AuthService from "../_services/AuthService";

export const loggedIn = (info) => (dispatch) => {
  return AuthService("post", "/auth/login", info)
    .then((res) => {
      dispatch({
        type: TYPES.LOGIN_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const register = (info) => (dispatch) => {
  return AuthService("post", "/auth/register", info)
    .then((res) => {
      dispatch({
        type: TYPES.REGISTE_SUCCESS,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const logout = () => (dispatch) => {
  return AuthService("post", "/auth/logout").then(() => {
    dispatch({
      type: TYPES.LOGOUT,
    });
  });
};
