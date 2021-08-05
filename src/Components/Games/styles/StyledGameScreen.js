import styled from "styled-components";

import tetris_bg from "../images/tetris.jpg";
import ttt_bg from "../images/ttt.jpg";

export const GamesBackground = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
`;

export const GamesScreen = styled.div`
  width: 55%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: 10px;
  background: white;
`;

export const TicTacToeScreen = styled(GamesScreen)``;

export const TetrisScreen = styled(GamesScreen)``;

export const PacmanScreen = styled(GamesScreen)``;

export const TicTacToebg = styled(GamesBackground)`
  background-image: url(${ttt_bg});
  background-size: cover;
`;

export const Tetrisbg = styled(GamesBackground)`
  background-image: url(${tetris_bg});
  background-size: cover;
`;

export const Pacmanbg = styled(GamesBackground)``;
