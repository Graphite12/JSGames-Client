import axios from "axios";

axios.defaults.baseURL = "https://localhost:5000"; //쿠키 전송을 위해선 같은도메인
axios.defaults.withCredentials = true; // 쿠키 데이터를 전송하기위해

const DOMAIN = "https://localhost:5000";
export default function (method, url, data) {
  return axios({
    method,
    url: DOMAIN + url,
    data,
  });
}
