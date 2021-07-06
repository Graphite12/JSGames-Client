import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { loggedIn } from "../../_actions/auth_action";
import { LoginWrapper, Form, Input, SigninButton } from "./styles/StyledSignin";
require("dotenv").config();

function Login(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPwd, setShowPwd] = useState(false);

  const formInputValue = (key) => (e) => {
    if (key === "EMAIL") setEmail(e.target.value);
    if (key === "PASSWORD") setPassword(e.target.value);
    console.log(e.target.value);
  };
  const onLogin = async (e) => {
    e.preventDefault();

    let data = {
      email: email,
      password: password,
    };

    dispatch(loggedIn(data));
    history.push("/");
  };

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
