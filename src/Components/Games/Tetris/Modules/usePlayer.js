import { useCallback, useState } from "react";
import { checkCollision, STAGE_WIDTH } from "./gameHelper";
import { randomTetromino, TETROMINOS } from "./tetrominos";

export const usePlayer = () => {
  const [player, setPlayer] = useState({
    pos: { x: 0, y: 0 },
    tetromino: TETROMINOS[0].shape,
    collided: false,
  });

  //블록 회전
  function rotate(matrix, dir) {
    //블록 을 돌려야함, 행을 열로 만듬
    const rotateRow = matrix.map((_, index) => matrix.map((col) => col[index]));

    if (dir > 0) return rotateRow.map((row) => row.reverse());
    return rotateRow.reverse();
  }

  //플레이어가 블록을 회전시키는 함수
  function playerRotate(stage, dir) {
    const clonedPlayer = JSON.parse(JSON.stringify(player));
    clonedPlayer.tetromino = rotate(clonedPlayer.tetromino, dir);

    const pos = clonedPlayer.pos.x;
    let offset = 1;

    while (checkCollision(clonedPlayer, stage, { x: 0, y: 0 })) {
      clonedPlayer.pos.x += offset;
      offset = -(offset + (offset > 0 ? 1 : -1));

      if (offset > clonedPlayer.tetromino[0].length) {
        rotate(clonedPlayer.tetromino, -dir);
        clonedPlayer.pos.x = pos;
        return;
      }
    }
    setPlayer(clonedPlayer);
  }

  //블록의 위치를 실시간으로 알려줌 + 충돌 여부
  const updatePlayerPos = ({ x, y, collided }) => {
    setPlayer((prev) => ({
      ...prev,
      pos: { x: (prev.pos.x += x), y: (prev.pos.y += y) },
      collided,
    }));
  };

  //매번 스테이지를 초기화 하기위한 함수.
  const resetPlayer = useCallback(() => {
    setPlayer({
      pos: { x: STAGE_WIDTH / 2 - 2, y: 0 },
      tetromino: randomTetromino().shape,
      collided: false,
    });
  }, []);

  return [player, updatePlayerPos, resetPlayer, playerRotate];
};
