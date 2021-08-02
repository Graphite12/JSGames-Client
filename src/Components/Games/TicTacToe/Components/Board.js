import { faSquare } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import ScoreCard from "./ScoreCard";
import GreenButton from "../modules/GreenButton";
import { TTTButton, Title, Boards, Row, TTTBoard } from "../styles/tttStyles";
import Square from "../modules/Square";

export default function Board({
  exitBtn,
  playAgain,
  showSquares,
  mode,
  winner,
  turn,
  ai,
  squares,
  xScore,
  oScore,
  onClick,
  WinningSquares,
}) {
  return (
    <Boards>
      <Title>
        {winner === "d" ? "Draw" : winner !== null && "Winner: " + winner}
      </Title>
      {winner === null && (
        <ScoreCard turn={turn} xScore={xScore} oScore={oScore} />
      )}
      {showSquares && (
        <TTTBoard>
          {squares.map((sqr, i) => (
            <Square
              key={i}
              value={sqr}
              onClick={() => {
                onClick(i);
              }}
            />
          ))}
        </TTTBoard>
      )}
      {!showSquares && (
        <div>
          <GreenButton onClick={playAgain}>다시 하기</GreenButton>
        </div>
      )}
    </Boards>
  );
}
