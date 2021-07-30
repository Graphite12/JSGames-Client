import react from "react";
import Cell from "./Cell";

//styled
import { Stages } from "./styles/StyledStage";

export default function Stage({ stage }) {
  return (
    <Stages width={stage[0].length} height={stage.length}>
      {stage.map((row) =>
        row.map((cell, x) => <Cell key={x} type={cell[0]} />)
      )}
    </Stages>
  );
}
