import styled from "styled-components";
/*
  display: flex;
  justify-content: center;
  align-items: center;
*/
export const ModalBackground = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0px;
  left: 0px;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
  z-index: 20;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Main_Container = styled.section`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: relative;

  z-index: 20;
  width: 70%;
  height: 75%;
`;

export const Auth_box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  box-shadow: 0px 0px 12px 2px rgba(15, 15, 15, 0.2);
  border-radius: 4px;
  position: relative;
  z-index: 20;
  width: 100%;
  height: 100%;
`;

export const closeBtn = styled.button`
  border: none;
  outline: none;
  font-size: 1.5rem;
  font-weight: bold;

  position: relative;
  z-index: 20;
  top: 0%;
  right: 10%;
  cursor: pointer;
`;
