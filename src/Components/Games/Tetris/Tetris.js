import { TetrisScreen, Tetrisbg } from "../styles/StyledGameScreen";
import TetrisCore from "./Components/TetrisCore";

export default function tetris() {
  return (
    <Tetrisbg>
      <TetrisScreen>
        <TetrisCore />
      </TetrisScreen>
    </Tetrisbg>
  );
}
