import { GamesBackground, TicTacToeScreen } from "../styles/StyledGameScreen";
import TicTacToeCore from "./Components/TicTacToeCore";

export default function TicTacToe() {
  return (
    <GamesBackground>
      <TicTacToeScreen>
        <TicTacToeCore />
      </TicTacToeScreen>
    </GamesBackground>
  );
}
