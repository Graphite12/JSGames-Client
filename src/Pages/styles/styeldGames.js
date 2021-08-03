import styled, { keyframes } from "styled-components";
import games from "../../image/games.jpg";

export const GameBox = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-image: url(${games});
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
  width: 95%;
  height: 80%;
  background: white;

  border-radius: 20px;
`;

export const RowsBox = styled.div`
  display: flex;
`;
