import React, { useState, useEffect } from "react";
import { checkWinner, AImove } from "./tttHelper";
import { BoardScreen } from "./styles/tttStyles";
import Modes from "./Mode";
import Board from "./Board";
import SelectPlayer from "./SelectPlayer";

export default function TicTacToe() {
  const [square, setSquare] = useState(Array(9).fill(null));
  const [mode, setMode] = useState(null);
  const [turn, setTurn] = useState(null);
  const [ai, setAi] = useState(null);
  const [scoreX, setScoreX] = useState(0);
  const [scoreO, setScoreO] = useState(0);
  const [winner, setWinner] = useState(null);
  const [winningSquares, setWinningSquares] = useState(null);
  const [showSquares, setShowSquares] = useState(true);

  useEffect(() => {
    if (mode && ai === turn) {
      console.log(AImove(square, ai, ai === "X" ? "O" : "X"));
      handleClick(AImove(square, ai, ai === "X" ? "O" : "X"));
    }
    const winner = checkWinner(square);
    setWinner(winner ? winner[0] : winner);
    setWinningSquares(winner ? winner[1] : winner);
  }, [square]);

  useEffect(() => {
    if (winner === "X") {
      setScoreX((scoreX) => scoreX + 1);
    } else if (winner === "O") {
      setScoreO((scoreO) => scoreO + 1);
    }
    winner !== null && countDown();
  }, [winner]);

  let changeTurn = () => {
    if (turn === "X") {
      setTurn("O");
    } else if (turn === "O") {
      setTurn("X");
    }
  };

  const countDown = () => {
    setTimeout(() => {
      changeTurn();
      setShowSquares(false);
      setWinner(null);
    }, 2500);
  };

  const handleClick = (i) => {
    const squares = square.slice();
    if (squares[i] || winner) {
      return;
    }
    squares[i] = turn;
    setSquare(squares);
    changeTurn();
  };

  const clickManBtn = () => {
    setMode(false);
  };

  const clickAiBtn = () => {
    setMode(true);
  };

  const oPlayerSelect = () => {
    setTurn("O");
    setAi("X");
  };

  const xPlayerSelect = () => {
    setTurn("X");
    setAi("O");
  };

  const playAgain = () => {
    setSquare(Array(9).fill(null));
    setShowSquares(true);
  };

  const clickExit = () => {
    setScoreO(0);
    setScoreX(0);
    setShowSquares(true);
    setWinner(null);
    setSquare(Array(9).fill(null));
    setTurn(null);
    setMode(null);
  };

  return (
    <BoardScreen>
      {mode === null ? (
        <Modes manBtn={clickManBtn} AIBtn={clickAiBtn} />
      ) : turn ? (
        <Board
          exitBtn={clickExit}
          playAgain={playAgain}
          showSquares={showSquares}
          mode={mode}
          winner={winner}
          turn={turn}
          ai={ai}
          onClick={handleClick}
          squares={square}
          xScore={scoreX}
          oScore={scoreO}
          WinningSquares={winningSquares}
        />
      ) : (
        <SelectPlayer oPlayer={oPlayerSelect} xPlayer={xPlayerSelect} />
      )}
    </BoardScreen>
  );
}
