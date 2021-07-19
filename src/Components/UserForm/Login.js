import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { loggedIn } from "../../_actions/auth_action";
import {
  AuthWrapper,
  Form,
  InputGroup,
  Input,
  SubmitBtn,
  PanelContainer,
  PanelContent,
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
    history.push("/");
  };

  return (
    <PanelContainer ref={props.authRef}>
      <h1>로그인</h1>
      <PanelContent>
        <Form onSubmit={onLogin}>
          <InputGroup>
            <label htmlFor="email">E-Mail</label>
            <Input
              type="text"
              name="email"
              value={email}
              onChange={formInputValue("EMAIL")}
              placeholder="E-mail"
            />
          </InputGroup>
          <InputGroup>
            <label htmlFor="password">Password</label>
            <Input
              type={showPwd ? "text" : "password"}
              name="password"
              value={password}
              onChange={formInputValue("PASSWORD")}
              placeholder="Password"
            />
          </InputGroup>
          <SubmitBtn> 로그인 </SubmitBtn>
        </Form>
      </PanelContent>
    </PanelContainer>
  );
}

export default Login;
