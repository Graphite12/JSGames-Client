import styled, { keyframes } from "styled-components";
import { useSpring, animated, config } from "react-spring";
//공통 스타일
export const AuthContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 2% 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const AuthContent = styled(animated.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 95%;
  transform-style: preserve-3d;
  position: relative;

  border: 1px solid black;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputGroup = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
  width: 100%;
  height: 50px;
  border: none;
  margin: 0.5rem 0;
  box-shadow: 0px 10px 30px -15px rgba(0, 0, 0, 0.8);
  border-radius: 10px;
  padding: 0 1.2rem;
  transition: all 0.2s ease-in;
  font-size: 1.2rem;

  &:hover {
    transform: translateY(-3px);
  }
`;

export const SubmitBtn = styled.button`
  width: 40%;
  height: 40px;
  border: none;
  margin: 1rem 0;
  box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
  background-color: green;
  border-radius: 8px;
  color: #fff;

  font-weight: 600;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.2s ease-in;

  &:hover {
    transform: translateY(-1px);
  }
`;

export const Status = styled.div`
  height: 10px;
  width: 10px;
  background: #9d9d9d;
  border-radius: 10px;
  margin-left: 1rem;

  ${Input}:focus + & {
    background: #ffa689;
  }
  ${Input}:invalid + & {
    background: #fe2f75;
  }
  ${Input}:valid + & {
    background: #70edb9;
  }
`;

//뒤로가기버튼
export const backBtnBox = styled.div`
  width: 70px;
  height: 70px;
  display: block;
  position: absolute;
  top: 0;
  right: 0;
`;

//Login Option

export const LoginFlipContent = styled(AuthContent)``;

export const LoginFlipBtn = styled(SubmitBtn)`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: inherit;
  border: 3px green solid;
  color: black;
  &:hover {
    background: blue;
    color: white;
    transform: translateY(-3px);
  }
`;

export const LoginBackBtn = styled.button`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: inherit;
  border: 3px green solid;
  color: black;
  &:hover {
    background: blue;
    color: white;
    transform: translateY(-3px);
  }
`;

//Register Option

export const RegisterFlipBtn = styled(SubmitBtn)`
  background: inherit;
  border: 3px green solid;
  color: black;
  &:hover {
    background: blue;
    color: white;
    transform: translateY(-3px);
  }
`;

export const RegisterBackBtn = styled.button`
  border-radius: 50%;
  background: inherit;
  border: 3px green solid;
  color: black;
  &:hover {
    background: blue;
    color: white;
    transform: translateY(-3px);
  }
`;

export const RegisterFlipContent = styled(AuthContent)``;

//panel Option

export const PanelBtn = styled.div``;
