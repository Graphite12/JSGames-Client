import React from "react";
import { CellBox } from "./styles/StyledCell";
import { TETROMINOS } from "../Modules/tetrominos";

const Cell = ({ type }) => {
  return <CellBox type={type} color={TETROMINOS[type].color} />;
};

export default React.memo(Cell);
