import styled from "styled-components";

export const GamesBackground = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
`;

export const GamesScreen = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 10px;
  background: white;
`;

export const TicTacToeScreen = styled(GamesScreen)``;

export const TetrisScreen = styled(GamesScreen)``;

export const PacmanScreen = styled(GamesScreen)``;
