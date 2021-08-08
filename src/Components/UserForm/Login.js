import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { loggedIn } from "../../_actions/auth_action";
import {
  Form,
  AuthContainer,
  AuthContent,
  SubmitBtn,
  LoginFlipBtn,
  LoginFlipContent,
} from "./styles/StyledAuthForm";
import Inputs from "./Inputs";

require("dotenv").config();

const Login = (props) => {
  const { flipsAnime, flipsAnime2, flips, flipsRedux } = props;
  const dispatch = useDispatch();
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
  };

  return (
    <AuthContainer>
      {flips ? (
        <AuthContent style={flipsAnime}>
          <LoginFlipBtn onClick={flipsRedux}>뒤로가기</LoginFlipBtn>
          <Form onSubmit={onLogin}>
            <h1>로그인</h1>
            <Inputs
              types="email"
              name="email"
              value={email}
              onChange={formInputValue("EMAIL")}
              placeholder="E-mail"
            />

            <Inputs
              types="password"
              name="password"
              value={password}
              onChange={formInputValue("PASSWORD")}
              placeholder="Password"
            />

            <SubmitBtn>로그인</SubmitBtn>
          </Form>
        </AuthContent>
      ) : (
        <LoginFlipContent>
          <div>이미 가입한 회원이신가요?</div>
          <LoginFlipBtn onClick={flipsRedux}>로그인 하러가기</LoginFlipBtn>
        </LoginFlipContent>
      )}
    </AuthContainer>
  );
};

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
