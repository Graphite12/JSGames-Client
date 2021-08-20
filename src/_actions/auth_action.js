import axios from "axios";
import { TYPES, MAF } from "./types";
const API_AUTH = "https://service.jsgames.link/auth";
const API_USER = "https://jsgames.link";
//필수!!
axios.defaults.withCredentials = true;

export function loggedIn(data) {
  return (dispatch) => {
    axios.post(`${API_AUTH}/login`, data).then((res) => {
      console.log(res);
      dispatch({
        type: TYPES.LOGIN_SUCCESS,
        // payload: res.data.userData,
      });
      dispatch({
        type: TYPES.SET_USERINFO,
        payload: res.data.userData,
      });

      dispatch({
        type: MAF.HIDE_MODAL,
      });
    });
  };
}

export function register(data) {
  return (dispatch) => {
    axios.post(`${API_AUTH}/register`, data).then((res) => {
      dispatch({
        type: TYPES.REGISTER_SUCCESS,
        payload: res.data,
      });
    });
  };
}

export function profile() {
  return (dispatch) => {
    axios.get(`${API_USER}/profile`).then((res) => {
      console.log(res);

      dispatch({
        type: TYPES.SET_USERINFO,
        payload: res.user,
      });
    });
  };
}
export const logout = () => {
  return (dispatch) => {
    axios.get(`${API_AUTH}/logout`).then((res) => {
      dispatch({
        type: TYPES.LOGOUT,
      });
    });
  };
};
