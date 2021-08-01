export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

export const createStage = () =>
  Array.from(Array(STAGE_HEIGHT), () => Array(STAGE_WIDTH).fill([0, "clear"]));

export const checkCollision = (player, stage, { x: moveX, y: moveY }) => {
  for (let y = 0; y < player.tetromino.length; y++) {
    for (let x = 0; x < player.tetromino[y].length; x++) {
      // 실제 셀이 있는지 확인한다.
      if (player.tetromino[y][x] !== 0) {
        if (
          //게임 영역 Y내에 있는지 확인한다.
          !stage[y + player.pos.y + moveY] ||
          // Y 영역과 동시에 너비 X내에 존재하는지 확인
          !stage[y + player.pos.y + moveY][x + player.pos.x + moveX] ||
          // 스테이지의 셀이 "clear"로 설정되어있는지 확인해야함.
          stage[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !==
            "clear"
        ) {
          return true;
        }
      }
    }
  }
  // 기본 값은 거짓
  return false;
};
