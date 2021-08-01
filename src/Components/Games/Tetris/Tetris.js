import TetrisCore from "./Components/TetrisCore";
import { TetrisScreen } from "./styles/StyledTetris";

export default function tetris() {
  return (
    <TetrisScreen>
      <TetrisCore />
    </TetrisScreen>
  );
}
