import { faSquare } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import ScoreCard from "./ScoreCard";
import GreenButton from "./modules/GreenButton";
import { TTTButton, Title, Boards, Row, TTTBoard } from "./styles/tttStyles";
import Square from "./modules/Square";

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
  // const renderSquare = (i) => {
  //   const color =
  //     WinningSquares !== null && WinningSquares.indexOf(i) !== -1
  //       ? "#39ff14"
  //       : null;

  //   return (
  //     <TTTButton
  //       color={color}
  //       onClick={() => {
  //         onClick(i);
  //       }}
  //     >
  //       {!squares[i] ? `${i}` : squares[i]}
  //     </TTTButton>
  //   );
  // };

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

          {/* <Row>
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
          </Row>
          <Row>
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
          </Row>
          <Row>
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
          </Row> */}
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
