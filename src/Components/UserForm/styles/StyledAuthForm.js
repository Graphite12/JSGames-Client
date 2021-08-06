import styled, { keyframes } from "styled-components";

//공통 스타일
export const AuthContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 1% 2%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AuthContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 70%;
  height: 80%;
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
  width: 90%;
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
  width: 75%;
  height: 40px;
  border: none;
  margin: 0.5rem 0;
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

  &:focus {
    outline: none;
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

//Login Option
export const LoginContainer = styled.div``;

//Register Option
export const RegisterContainer = styled.div``;

//panel Option

export const PanelBtn = styled.div``;
