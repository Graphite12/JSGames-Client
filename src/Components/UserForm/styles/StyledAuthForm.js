import styled, { keyframes } from "styled-components";

//same Option
export const PanelContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 24px;
    font-family: "Open Sans", sans-serif;
  }
`;

export const PanelContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Form = styled.form`
  margin-top: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputGroup = styled.label`
  display: block;
  width: 260px;
  margin: 25px auto 0;
  text-align: center;

  label {
    font-size: 20px;
  }
`;

export const Input = styled.input`
  margin-top: 6px;
  min-width: 18em;
  height: 37px;
  padding: 0px 10px;
  font-size: 16px;
  font-family: "Open Sans", sans-serif;
  background-color: #f3f3f3;
  border: 0;
  border-radius: 4px;
  margin-bottom: 31px;
  transition: all 250ms ease-in-out;

  &:hover {
  }

  &:focus {
    outline: none;
    box-shadow: 0px 0px 12px 0.8px #3474dbb2;
  }
`;

export const SubmitBtn = styled.button`
  font-size: 21px;
  padding: 5px 20px;
  border: 0;
  background-color: #3498db;
  color: #fff;
  border-radius: 3px;
  transition: all 250ms ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: #2386c8;
  }

  &:focus {
    outline: none;
  }
`;

export const Footer = styled.footer`
  margin-top: 3em;
`;

//Login Option
export const LoginContainer = styled.div``;

//Register Option
export const RegisterContainer = styled.div``;

//panel Option

export const PanelBtn = styled.div``;
