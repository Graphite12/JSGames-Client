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
  const [submited, setSubmited] = useState(false);
  const [showPwd, setShowPwd] = useState(false);
  const [alert, setAlert] = useState("");

  const formInputValue = (key) => (e) => {
    if (key === "EMAIL") setEmail(e.target.value);
    if (key === "PASSWORD") setPassword(e.target.value);
    console.log(e.target.value);
  };
  const onLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setAlert("이메일 주소와 비밀번호를 입력 하세요!");
    }

    let data = {
      email: email,
      password: password,
    };
    dispatch(loggedIn(data));
  };

  return (
    <LoginWrapper>
      <Form onSubmit={onLogin}>
        <div>
          <label htmlFor="email">E-Mail</label>
          <Input
            type="text"
            name="email"
            value={email}
            onChange={formInputValue("EMAIL")}
          />
          {submited && !email && <div> 이메일을 입력하세요</div>}
        </div>
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
