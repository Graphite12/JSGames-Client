import { useState } from "react";

export default function AiBoard() {
  const position = Array(9).fill(0);
  const turn = "x";

  const opositeTurn = () => {
    return turn === "x" ? "o" : "x";
  };

  const move = (location) => {
    let tempPosition = position.slice();
    tempPosition[location] = turn;

    return new AiBoard(tempPosition, opositeTurn());
  };

  const legalMoves = () => {
    const moves = [];

    for (let i in position) {
      if (!position[i]) {
        moves.push(i);
      }
    }
    return moves;
  };

  const isWin = () => {
    return (
      (position[0] &&
        position[0] === position[1] &&
        position[0] === position[2]) || // row 0
      (position[3] &&
        position[3] === position[4] &&
        position[3] === position[5]) || // row 1
      (position[6] &&
        position[6] === position[7] &&
        position[6] === position[8]) || // row 2
      (position[0] &&
        position[0] === position[3] &&
        position[0] === position[6]) || // col 0
      (position[1] &&
        position[1] === position[4] &&
        position[1] === position[7]) || // col 1
      (position[2] &&
        position[2] === position[5] &&
        position[2] === position[8]) || // col 2
      (position[0] &&
        position[0] === position[4] &&
        position[0] === position[8]) || // diag 0
      (position[2] &&
        position[2] === position[4] &&
        position[2] === position[6]) // diag 1
    );
  };

  const isDraw = () => {
    return !isWin() && legalMoves().length === 0;
  };

  const minimax = (board, maximizing, originalPlayer) => {
    if (board.isWin() && originalPlayer === board.opositeTurn()) {
      // win
      return 1;
    } else if (board.isWin() && originalPlayer !== board.opositeTurn()) {
      // loss
      return -1;
    } else if (board.isDraw()) {
      // draw
      return 0;
    }

    if (maximizing) {
      var bestEval = Number.MIN_SAFE_INTEGER;

      for (let move of board.legalMoves()) {
        const result = minimax(board.move(move), false, originalPlayer);
        bestEval = Math.max(result, bestEval);
      }

      return bestEval;
    } else {
      // minimizing
      var worstEval = Number.MAX_SAFE_INTEGER;

      for (let move of board.legalMoves()) {
        const result = minimax(board.move(move), true, originalPlayer);
        worstEval = Math.min(result, worstEval);
      }

      return worstEval;
    }
  };
  const findBestMove = (board) => {
    let bestEval = Number.MIN_SAFE_INTEGER;
    let bestMove = -1;

    for (let move of board.legalMoves()) {
      const result = minimax(board.move(move), false, board.turn);

      if (result > bestEval) {
        bestEval = result;
        bestMove = move;
      }
    }

    return bestMove;
  };
}
