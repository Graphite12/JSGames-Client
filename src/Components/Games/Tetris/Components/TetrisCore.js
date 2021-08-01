import react, { useState } from "react";

//components
import Stage from "./Stage";
import Display from "./Display";
import StartButton from "./StartButton";

//modules && CustomHooks
import { createStage, checkCollision } from "../Modules/gameHelper";
import { useStage } from "../Modules/useStage";
import { usePlayer } from "../Modules/usePlayer";
import { useInterval } from "../Modules/useInternel";
import { useGameStatus } from "../Modules/useGameStatus";

//styled
import { TetrisWrapper, TetrisBox } from "./styles/StyledTetris";

const TetrisCore = () => {
  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer();
  const [stage, setStage, rowsCleared] = useStage(player, resetPlayer);
  const [score, setScore, rows, setRows, level, setLevel] =
    useGameStatus(rowsCleared);

  const movePlayer = (dir) => {
    if (!checkCollision(player, stage, { x: dir, y: 0 })) {
      updatePlayerPos({ x: dir, y: 0 });
    }
  };

  const startGame = () => {
    console.log("test");
    //모든 기능을 리셋
    setStage(createStage());
    setDropTime(1000);
    resetPlayer();
    setScore(0);
    setRows(0);
    setLevel(0);
    setGameOver(false);
  };

  const drop = () => {
    if (rows > (level + 1) * 10) {
      setLevel((pr) => pr + 1);
      setDropTime(1000 / (level + 1) + 200);
    }

    if (!checkCollision(player, stage, { x: 0, y: 1 })) {
      updatePlayerPos({ x: 0, y: 1, collided: false });
    } else {
      //만약 게임 오버시
      if (player.pos.y < 1) {
        console.log("GAME OVER!!!!");

        setGameOver(true);
        setDropTime(null);
      }
      updatePlayerPos({ x: 0, y: 0, collided: true });
    }
  };

  const dropPlayer = () => {
    setDropTime(null);
    drop();
  };

  const keyUp = ({ keyCode }) => {
    if (!gameOver) {
      if (keyCode === 40) {
        console.log("interval Off");
        setDropTime(1000 / (level + 1));
      }
    }
  };

  useInterval(() => {
    drop();
  }, dropTime);

  const move = ({ keyCode }) => {
    if (!gameOver) {
      if (keyCode === 37) {
        movePlayer(-1);
      } else if (keyCode === 39) {
        movePlayer(1);
      } else if (keyCode === 40) {
        dropPlayer();
      } else if (keyCode === 38) {
        playerRotate(stage, 1);
      }
    }
  };

  console.log("re-render");
  return (
    <TetrisWrapper
      role="button"
      tabIndex="0"
      onKeyDown={(e) => move(e)}
      onKeyUp={keyUp}
    >
      <TetrisBox>
        <Stage stage={stage} />
        <aside>
          {gameOver ? (
            <Display gameOver={gameOver} text="Game Over" />
          ) : (
            <div>
              <Display text={`Score: ${score}`} />
              <Display text={`Rows: ${rows}`} />
              <Display text={`Level: ${level}`} />
            </div>
          )}
          <StartButton callback={startGame} />
        </aside>
      </TetrisBox>
    </TetrisWrapper>
  );
};

export default TetrisCore;
