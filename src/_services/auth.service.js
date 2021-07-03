import axios from "axios";

const API_URL = "https://localhost:5000/auth";

const register = (username, email, password) => {
  return axios.post(
    `${API_URL}/register`,
    {
      username,
      email,
      password,
    },
    { withCredentials: true, crossDomain: true }
  );
};

const login = (email, password) => {
  return axios
    .post(
      `${API_URL}/login`,
      { email, password },
      { withCredentials: true, crossDomain: true }
    )
    .then((res) => {
      const token = res.data.accessToken;
      if (token) {
        localStorage.setItem("local_token", JSON.stringify(res.data));
      }
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

export default { register, login, logout };
