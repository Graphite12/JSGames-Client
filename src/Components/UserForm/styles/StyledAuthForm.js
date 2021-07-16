import styled, { keyframes } from "styled-components";

//same Option

export const Form = styled.form`
  position: relative;
  width: 640px;
  height: 100%;
  -webkit-transition: -webkit-transform 1.2s ease-in-out;
  transition: -webkit-transform 1.2s ease-in-out;
  transition: transform 1.2s ease-in-out;
  transition: transform 1.2s ease-in-out, -webkit-transform 1.2s ease-in-out;
  padding: 50px 30px 0;
`;

export const InputField = styled.div``;

export const Input = styled.input``;

export const SubmitBtn = styled.button`
  display: block;
  margin: 0 auto;
  width: 260px;
  height: 36px;
  border-radius: 30px;
  color: #fff;
  font-size: 15px;
  cursor: pointer;
`;

//Login Option
export const LoginContainer = styled.div``;

//Register Option
export const RegisterContainer = styled.div``;

//panel Option
export const PanelContainer = styled.div``;

export const Panel = styled.div``;

export const PanelContent = styled.div``;

export const PanelBtn = styled.div``;
