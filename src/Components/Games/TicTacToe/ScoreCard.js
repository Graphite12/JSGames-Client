import React from "react";

import { Score } from "./styles/tttStyles";

export default function ScoreCard({ turn, xScore, oScore }) {
  return (
    <>
      <tttButton width={"100px"} height={"100px"}>
        X
      </tttButton>
      {turn === "X" && <Score>&#8594;</Score>}
      <Score turn={turn} check="X">
        {xScore}
      </Score>
      <tttButton width={"100px"} height={"100px"}>
        X
      </tttButton>
      {turn === "O" && <Score>&#8594;</Score>}
      <tttScore turn={turn} check="O">
        {oScore}
      </tttScore>
    </>
  );
}
