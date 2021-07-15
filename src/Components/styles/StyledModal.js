import styled from "styled-components";

export const ModalBackground = styled.div`
  position: absolute;
  height: 100vh;
  width: 100%;
  top: 0px;
  left: 0px;
  background: rgba(255, 255, 255, 0.8);
  z-index: 2;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Modals = styled.section`
  max-width: 800px;
  max-height: 500px;
  background: black;
  display: flex;
  flex-direction: column;
`;

export const AuthWrapper = styled.section`
  position: absolute;
  width: 50%;
  transform: translate(-50%, -50%);
  transition: 1s 0.7s ease-in-out;
  display: grid;
  grid-template-column: 1fr;
  top: 50%;
  left: 75%;
  z-index: 5;
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
  background: #fff;
  min-height: 100vh;
  overflow: hidden;

  &:before {
    contetnt: "";
    position: absolute;
    hegiht: 2000px;
    width: 2000px;
    top: -10px;
    right: 48%;
    transform: translateY(-50%);
    transition: 1.8s ease-in-out;
    border-radius: 50%;
    z-index: 6;
  }
`;

export const FormContainer = styled.div`
  position: absolute;
  width: 100%;
  hegith: 100%;
  top: 0;
  left: 0;
`;
