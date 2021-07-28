import React from "react";

import { TTTButton, Score, TTTMain, ScoreBoard } from "./styles/tttStyles";

export default function ScoreCard({ turn, xScore, oScore }) {
  return (
    <ScoreBoard>
      {turn === "X"}
      <Score turn={turn} check="X">
        {xScore}
      </Score>

      {turn === "O"}
      <Score turn={turn} check="O">
        {oScore}
      </Score>
    </ScoreBoard>
  );
}
