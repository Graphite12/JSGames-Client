import styled, { keyframes } from "styled-components";

export const RegisterWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-itmes: center;
  heigth: 100vh;
  width: 100%;
  background: ;
`;

export const Form = styled.form`
  margin: 0 auto;
  width: 100%;
  max-width: 300px;
  padding: 1.2rem;

  display: flex;
  flex-direction: column;
  .
`;

export const Input = styled.input`
  max-width: 100%;

  margin: 2% 0%;
  padding: 1% 2%;
  background: #f9f9fa;
  color: #f03d4e;

  border-radius: 4px;
  outline: 0;

  border: 1px solid rgba(245, 245, 245, 0.7);
  font-size: 14px;
  transition: all 0.3s ease-out;

  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.1);

  :focus,
  :hover {
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.15), 0 1px 5px rgba(0, 0, 0, 0.1);
  }
`;

const jump = keyframes`
from{
   transform: translateY(0) 
} to {
    transform: translateY(-3px)
}
`;

export const SigninButton = styled.button`
  max-width: 100%;
  margin: 2% 
  padding: 11px 20px;
  color: white;
  font-weight: bold;

  background: #81f781;
  border: none;
  border-radius: 3px;
  outline: 0;

  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-out;
  :hover {
    background: rgb(200, 50, 70);
    animation: ${jump} 0.2s ease-out forwards;
  }
`;
