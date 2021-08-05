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

  @supports (backdrop-filter: blur(20px)) or
    (--webkit-backdrop-filter: blur(10px)) {
    & {
      background-color: rgba(255, 255, 255, 0.8);
      border: 1px solid rgba(255, 255, 255, 0.8);

      backdrop-filter: blur(20px);
      box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.7);
    }
  } ;
`;

export const RowsBox = styled.div`
  display: flex;
`;
