import { GamesBackground, TetrisScreen } from "../styles/StyledGameScreen";
import TetrisCore from "./Components/TetrisCore";

export default function tetris() {
  return (
    <GamesBackground>
      <TetrisScreen>
        <TetrisCore />
      </TetrisScreen>
    </GamesBackground>
  );
}
