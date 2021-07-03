import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../_actions/auth_action";
import {
  RegisterWrapper,
  Form,
  Input,
  SigninButton,
} from "../styles/StyledRegister";
require("dotenv").config();

export default function Register(props) {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [submited, setSubmited] = useState("false");

  const formInputValue = (key) => (e) => {
    if (key === "USERNAME") setUsername(e.target.value);
    if (key === "EMAIL") setEmail(e.target.value);
    if (key === "PASSWORD") setPassword(e.target.value);
    if (key === "CONPWD") setConfirmPassword(e.target.value);
    console.log(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(register(username, email, password))
      .then(() => {
        setSubmited("true");
        props.history.push("/auth/login");
      })
      .catch(() => {
        setSubmited("false");
      });
  };

  return (
    <RegisterWrapper>
      <Form onSubmit={onSubmit}>
        {submited && (
          <>
            <label htmlFor="username">Username</label>
            <Input
              type="text"
              name="username"
              value={username}
              onChange={formInputValue("USERNAME")}
            />
            <label htmlFor="email">E-Mail</label>
            <Input
              type="text"
              name="email"
              value={email}
              onChange={formInputValue("EMAIL")}
            />
            <label htmlFo="password">Password</label>
            <Input
              type="password"
              name="password"
              value={password}
              onChange={formInputValue("PASSWORD")}
            />
            <label htmlFo="confirmPassword">confirmPassword</label>
            <Input
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={formInputValue("CONPWD")}
            />
            <SigninButton> 회원가입 </SigninButton>
          </>
        )}
      </Form>
    </RegisterWrapper>
  );
}
