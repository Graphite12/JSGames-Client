import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  makeMove,
  setAITurn,
  setXWin,
  setOWin,
  setDraw,
} from "../../../_actions/tic_action";
import { AiBoard as GameBoard, findBestMove } from "./aicore";

export default function Board() {
  const dispatch = useDispatch();

  const { squares, isTurnX, isPvP, isTurnAI, isGameEnd } = useSelector(
    (state) => state.tic_reducer
  );

  const calculateWinner = (squares) => {
    const defaultBoard = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < defaultBoard.length; i++) {
      const [a, b, c] = defaultBoard[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return [squares[a], a + "-" + c];
      }
    }
    return [squares.filter((square) => square === null).length === 0, false];
  };

  const handleClick = (i, ai = false) => {
    if (isGameEnd || squares[i] !== null || (!ai && !isPvP && isTurnAI)) {
      return;
    }

    const squarez = squares.slice();
    squarez[i] = isTurnX ? "x" : "o";

    dispatch(makeMove(squarez));

    const [winner] = calculateWinner(squarez);

    if (winner) {
      if (winner === "x") {
        dispatch(setXWin());
      } else if (winner === "o") {
        dispatch(setOWin());
      } else {
        dispatch(setDraw());
      }
    }
  };

  const aiMove = () => {
    if (!isGameEnd && !isPvP && isTurnAI) {
      const move = squares.filter((sqr) =>
        sqr.length === 0
          ? Math.floor(Math.random() * 8)
          : findBestMove(new GameBoard(squares, isTurnX ? "x" : "o"))
      );
    }
  };
  return <div></div>;
}
