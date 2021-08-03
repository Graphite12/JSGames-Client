import { TicTacToebg, TicTacToeScreen } from "../styles/StyledGameScreen";
import TicTacToeCore from "./Components/TicTacToeCore";

export default function TicTacToe() {
  return (
    <TicTacToebg>
      <TicTacToeScreen>
        <TicTacToeCore />
      </TicTacToeScreen>
    </TicTacToebg>
  );
}
