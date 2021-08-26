import axios from "axios";
import { TYPES, MAF, TYPE2 } from "./types";
const API_AUTH = "https://localhost:5000";

axios.defaults.withCredentials = true;

export function refreshTokenRequest() {
  axios.get(`${API_AUTH}/`);
}
