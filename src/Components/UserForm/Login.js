import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { loggedIn } from "../../_actions/auth_action";
import {
  AuthWrapper,
  Form,
  InputField,
  Input,
  SubmitBtn,
} from "./styles/StyledAuthForm";
import "./styles/StyledAuthForm.css";

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
    <Form onSubmit={onLogin} className="sign_in_form">
      <h1>로그인</h1>
      <InputField>
        <label htmlFor="email">E-Mail</label>
        <Input
          type="text"
          name="email"
          value={email}
          onChange={formInputValue("EMAIL")}
          placeholder="E-mail"
        />
        {submited && !email && <div> 이메일을 입력하세요</div>}
      </InputField>
      <label htmlFo="password">Password</label>
      <Input
        type={showPwd ? "text" : "password"}
        name="password"
        value={password}
        onChange={formInputValue("PASSWORD")}
        placeholder="Password"
      />

      <SubmitBtn> 로그인 </SubmitBtn>
    </Form>
  );
}

export default Login;
