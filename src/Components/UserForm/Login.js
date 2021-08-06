import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { loggedIn } from "../../_actions/auth_action";
import {
  Form,
  AuthContainer,
  AuthContent,
  SubmitBtn,
} from "./styles/StyledAuthForm";
import Inputs from "./Inputs";

require("dotenv").config();

function Login(props) {
  const { panelA } = props;
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
    history.push("/");
  };

  return (
    <AuthContainer>
      <AuthContent>
        <Form onSubmit={onLogin}>
          <h1>로그인</h1>
          <Inputs
            type="email"
            value={email}
            onChange={formInputValue("EMAIL")}
            placeholder="E-mail"
          />

          <Inputs
            type={showPwd ? "text" : "password"}
            value={password}
            onChange={formInputValue("PASSWORD")}
            placeholder="Password"
          />
          <SubmitBtn>비밀번호를 잊으셨나요?</SubmitBtn>
          <SubmitBtn>로그인</SubmitBtn>
        </Form>
      </AuthContent>
    </AuthContainer>
  );
}

/**
  {/* <InputGroup>
            <Input
              type="text"
              name="email"
              value={email}
              onChange={formInputValue("EMAIL")}
              placeholder="E-mail"
            />

            <Input
              type={showPwd ? "text" : "password"}
              name="password"
              value={password}
              onChange={formInputValue("PASSWORD")}
              placeholder="Password"
            />
          </InputGroup>
          <SubmitBtn> 로그인 </SubmitBtn>
          <button>Forgot your Passowrd?</button>
 
 */

export default Login;
