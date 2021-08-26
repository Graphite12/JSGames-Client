import axios from "axios";
import { TYPE2 } from "./types";
const API_AUTH = "https://localhost:5000";

export function sendMail(data) {
  return (dispatch) => {
    axios
      .post(`${API_AUTH}/contact`, data, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        console.log(res);
        dispatch({
          type: TYPE2.MAILER_STATUS,
          payload: res,
        });
      });
  };
}
