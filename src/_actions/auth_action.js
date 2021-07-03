import { TYPES } from "./types";
import AuthService from "../_services/auth.service";

export const login = (email, password) => (dispatch) => {
  return AuthService.login(email, password).then(
    (data) => {
      dispatch({
        type: TYPES.LOGIN_SUCCESS,
        payload: { data },
      });
      return Promise.resolve();
    },
    (err) => {}
  );
};

export const register = (email, password) => (dispatch) => {
  return AuthService.login(email, password).then(
    (data) => {
      dispatch({
        type: TYPES.REGISTER_SUCCESS,
      });
      return Promise.resolve();
    },
    (err) => {}
  );
};

export const logout = () => (dispatch) => {
  AuthService.logout();
  dispatch({
    type: TYPES.LOGOUT,
  });
};

// export const login = (email, password) => {
//   const req = axios
//     .post("/auth/login", { email, password })
//     .then((response) => response.data);
//   return {
//     type: LOGIN_SUCCESS,
//     payload: req,
//   };
// };
// export const register = (username, email, password) => {
//   const req = axios
//     .post("/auth/register", { username, email, password })
//     .then((response) => response.data);
//   return {
//     type: TYPES.REGISTER_SUCCESS,
//     payload: req,
//   };
// };

// export default function logout(username, email, password){
//     return {
//         type:Types.REGISTER_SUCCESS,
//         payload:
//     }

// }
