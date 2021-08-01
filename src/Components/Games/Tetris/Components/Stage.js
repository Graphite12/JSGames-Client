import react from "react";
import Cell from "./Cell";

//styled
import { Stages } from "./styles/StyledStage";

const Stage = ({ stage }) => (
  <Stages width={stage[0].length} height={stage.length}>
    {stage.map((row) => row.map((cell, x) => <Cell key={x} type={cell[0]} />))}
  </Stages>
);

export default Stage;
