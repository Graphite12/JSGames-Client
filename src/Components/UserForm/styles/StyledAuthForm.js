import styled, { keyframes } from "styled-components";

//same Option

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 5%;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
`;

export const InputField = styled.div`
  max-width: 380px;
  width: 100%;
  background: #f0f0f0;
  margin: 10px 0;
  hegith: 55px;
  border-radious: 55px;
  display: grid;
  grid-template-column: 15% 85%;
  padding: 0 0.4rem;
  position: relactive;
`;

export const Input = styled.input`
  background: none;
  border: none;
  outline: none;
  line-height: 1;
  font-weight: 600;
  font-size: 1.2rem;
  color: #333;
  &::placeholder{
      color: #aaa
      font-weight: 500;
  }
`;

export const SubmitBtn = styled.button`
  width: 150px;
  background-color: #5995fd;
  border: none;
  outline: none;
  height: 40px;
  border-radius: 50px;
  color: #fff;
  text-transform: uppercase;
  font-weight: 500;
  margin: 10px 0;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    background-color: #4d84e2;
  }
}
`;

//Login Option
export const LoginContainer = styled.div``;

//Register Option
export const RegisterContainer = styled.div``;

//panel Option
export const PanelContainer = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export const Panel = styled.div`
  display: flex;
  flex-direction: column;
  align-itmes: flex-end;
  justify-content: space-around;
  text-align: center;
  z-index: 6;
`;

export const PanelContent = styled.div``;
