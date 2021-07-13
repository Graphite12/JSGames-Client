import axios from "axios";
import { TYPES } from "./types";

export const loggedIn =
  ({ email, password }) =>
  (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({ email, password });
    axios
      .post("https://localhost:5000/auth/login", body, config)
      .then((res) => {
        dispatch({
          type: TYPES.LOGIN_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: TYPES.LOGIN_FAIL,
        });
      });
  };

export const register =
  ({ username, email, password }) =>
  (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({ username, email, password });
    axios
      .post("https://localhost:5000/auth/register", body, config)
      .then((res) => {
        dispatch({
          type: TYPES.REGISTE_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err);

        dispatch({
          type: TYPES.REGISTE_FAIL,
        });
      });
  };

export const logout = () => {
  return {
    type: TYPES.LOGOUT,
  };
};
