import axios from "axios";
import { TYPES } from "./types";
const API_AUTH = "https://localhost:5000/auth";
const API_USRE = "https://localhost:5000/";
//필수!!
axios.defaults.withCredentials = true;

export function loggedIn(data) {
  return (dispatch) => {
    axios.post(`${API_AUTH}/login`, data).then((res) => {
      console.log(res);

      dispatch({
        type: TYPES.LOGIN_SUCCESS,
        payload: res.data.userData,
      });
    });
  };
}

export function register(data) {
  return (dispatch) => {
    axios.post(`${API_AUTH}/register`, data).then((res) => {
      console.log(res);
      dispatch({
        type: TYPES.REGISTE_SUCCESS,
        payload: res.data,
      });
    });
  };
}

export function profile() {
  return (dispatch) => {
    axios.get(`:id/profile`).then((res) => {
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
