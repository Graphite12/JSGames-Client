import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter, Redirect } from "react-router-dom";

import { login } from "../../_actions/auth_action";
import {
  LoginWrapper,
  Form,
  Input,
  SigninButton,
} from "../styles/StyledSignin";
require("dotenv").config();

function Login(props) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPwd, setShowPwd] = useState(false);

  const { isLogin } = useSelector((state) => state.UserStatusReducer);

  const formInputValue = (key) => (e) => {
    if (key === "EMAIL") setEmail(e.target.value);
    if (key === "PASSWORD") setPassword(e.target.value);
    console.log(e.target.value);
  };
  const onLogin = (e) => {
    e.preventDefault();

    dispatch(login(email, password)).then((res) => {
      console.log(res);
      // if (res.payload.login) props.history.push("/");
      // else alert("Error");
    });
  };

  const showPassword = () => {
    setShowPwd(true);
  };

  if (isLogin) {
    return <Redirect to="/profile" />;
  }
  return (
    <LoginWrapper>
      <Form onSubmit={onLogin}>
        <label htmlFor="email">E-Mail</label>
        <Input
          type="text"
          name="email"
          value={email}
          onChange={formInputValue("EMAIL")}
        />
        <label htmlFo="password">Password</label>
        <Input
          type={showPwd ? "text" : "password"}
          name="password"
          value={password}
          onChange={formInputValue("PASSWORD")}
        />

        <SigninButton> 로그인 </SigninButton>
      </Form>
    </LoginWrapper>
  );
}

export default Login;
