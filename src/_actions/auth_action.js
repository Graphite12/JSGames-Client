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
//   return (dispatch) => {
//     axios
//       .post(`${API_URL}/login`, info, {
//         withCredentials: true,
//         crossDomain: true,
//       })
//       .then((res) => {
//         dispatch({
//           type: TYPES.LOGIN_SUCCESS,
//           payload: res.data,
//         });
//         return Promise.resolve();
//       });
//   };
// };

// return (dispatch) => {
//   axios
//     .post(`${API_URL}/register`, info, {
//       withCredentials: true,
//       crossDomain: true,
//     })
//     .then(() => {
//       dispatch({
//         type: TYPES.REGISTE_SUCCESS,
//       });
//     });
// };

// export const setUserInfo = (username, email) => {
//   return {
//     type: TYPES.SET_USERINFO,
//     payload: { username, email },
//   };
// };

// export const toggleLoginStatus = () => {
//   return {
//     type: TYPES.TOGGLE_LOGINSTATUS,
//   };
// };

// // -------------Access, Refresh Token--------------- //

// export const setAccessToken = (accessToken) => {
//   return {
//     type: TYPES.SET_ACCESSTOKEN,
//     payload: { accessToken },
//   };
// };

// export const setRefreshToken = (refreshToken) => {
//   return {
//     type: TYPES.SET_REFRESHTOKEN,
//     payload: { refreshToken },
//   };
// };

// // -------------Modal--------------- //

// export const toggleModal = () => {
//   return {
//     type: TYPES.TOGGLE_MODAL,
//   };
// };

// export const setModalType = (type) => {
//   return {
//     type: TYPES.SET_MODALTYPE,
//     payload: { type },
//   };
// };
// export const register = (username, email, password) => (dispacth) => {
//   return AuthService.register(username, email, password).then(
//     (res) => {
//       dispacth({
//         type: TYPES.REGISTER_SUCCESS,
//       });

//       dispacth({
//         type: TYPES.SET_MESSAGE,
//         payload: res.data.message,
//       });
//       return Promise.resolve();
//     },
//     (err) => {
//       const message =
//         (err.response && err.response.data && err.response.data.message) ||
//         err.message ||
//         err.toString();

//       dispacth({
//         type: TYPES.REGISTER_FAILURE,
//       });

//       dispacth({
//         type: TYPES.SET_MESSAGE,
//         payload: message,
//       });

//       return Promise.reject();
//     }
//   );
// };

// export const login = (email, password) => (dispacth) => {
//   return AuthService.login(email, password).then(
//     (data) => {
//       dispacth({
//         type: TYPES.LOGIN_SUCCESS,
//         payload: { user: data },
//       });

//       return Promise.resolve();
//     },
//     (err) => {
//       const message =
//         (err.response && err.response.data && err.response.data.message) ||
//         err.message ||
//         err.toString();

//       dispacth({
//         type: TYPES.LOGIN_FAILURE,
//       });

//       dispacth({
//         type: TYPES.SET_MESSAGE,
//         payload: message,
//       });

//       return Promise.reject();
//     }
//   );
// };

// export const logout = () => (dispatch) => {
//   AuthService.logout();

//   dispatch({
//     type: TYPES.LOGOUT_SUCCESS,
//   });
// };
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
