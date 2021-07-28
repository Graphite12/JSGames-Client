import { faSquare } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import ScoreCard from "./ScoreCard";
import GreenButton from "./modules/GreenButton";
import { Title } from "./styles/tttStyles";

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
  const renderSquare = (i) => {
    const color =
      WinningSquares !== null &&
      WinningSquares.indexOf(i !== -1 ? "#39ff14" : null);

    return (
      <tttButton
        color={color}
        width={"100px"}
        height={"100px"}
        onClick={() => {
          onClick(i);
        }}
      >
        {!squares[i] ? "." : squares[i]}
      </tttButton>
    );
  };

  return (
    <>
      <Title>
        {winner === "d" ? "Draw" : winner !== null && "Winner: " + winner}
      </Title>
      {winner === null && (
        <ScoreCard turn={turn} xScore={xScore} oScore={oScore} />
      )}
      {showSquares && (
        <div>
          <div>
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
          </div>
          <div>
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
          </div>
          <div>
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
          </div>
        </div>
      )}
      {!showSquares && (
        <div>
          <GreenButton onClick={playAgain}>playAgain</GreenButton>
        </div>
      )}
    </>
  );
}
