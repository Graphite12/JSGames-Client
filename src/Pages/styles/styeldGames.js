import styled, { keyframes } from "styled-components";

export const GameBox = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background: green;
`;

export const GameTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: white;
`;

export const GameTabs = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 50px;
  background-color: white;
`;

export const GameContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80%;
  background: white;
`;
