import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  isValidID,
  isValidEmail,
  isValidPassword,
} from "../../util/Validation";
import { register } from "../../_actions/auth_action";
import {
  AuthWrapper,
  Form,
  InputField,
  Input,
  SubmitBtn,
} from "./styles/StyledAuthForm";
import "./styles/StyledAuthForm.css";
require("dotenv").config();

export default function Register(props) {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [submited, setSubmited] = useState("false");
  const [alert, setAlert] = useState("");
  const history = useHistory();

  const formInputValue = (key) => (e) => {
    if (key === "USERNAME") setUsername(e.target.value);
    if (key === "EMAIL") setEmail(e.target.value);
    if (key === "PASSWORD") setPassword(e.target.value);
    if (key === "CONPWD") setConfirmPassword(e.target.value);
    console.log(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    let data = {
      username: username,
      email: email,
      password: password,
    };

    if (password !== confirmPassword) {
      return setAlert("비밀번호가 일치하지 않습니다.");
    }

    if (!isValidID(username)) {
      setAlert("아이디는 영문과 숫자로 5~15자로 작성해야 합니다.");
    }

    if (!isValidEmail(email)) {
      return setAlert("유효하지 않은 이메일 주소입니다.");
    }

    if (!isValidPassword(password)) {
      return setAlert(
        "비밀번호는 영문, 숫자, 특수문자 조합으로 8~20자로 작성해야합니다."
      );
    }

    dispatch(register(data));
  };

  return (
    <Form onSubmit={onSubmit} className="sign_up_form">
      {submited && (
        <InputField>
          <label htmlFor="username">Username</label>
          <Input
            type="text"
            name="username"
            value={username}
            onChange={formInputValue("USERNAME")}
            placeholder="Username"
          />
          <label htmlFor="email">E-Mail</label>
          <Input
            type="text"
            name="email"
            value={email}
            onChange={formInputValue("EMAIL")}
            placeholder="E-Mail"
          />
          <label htmlFo="password">Password</label>
          <Input
            type="password"
            name="password"
            value={password}
            onChange={formInputValue("PASSWORD")}
            placeholder="Password"
          />
          <label htmlFo="confirmPassword">confirmPassword</label>
          <Input
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={formInputValue("CONPWD")}
            placeholder="Confirm Password"
          />
          <SubmitBtn> 회원가입 </SubmitBtn>
        </InputField>
      )}
    </Form>
  );
}
