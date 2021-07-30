import react from "react";
import { CellBox } from "./styles/StyledCell";
import { TETROMINOS } from "../Modules/tetrominos";

export default function Cell({ type }) {
  return <CellBox type={type} color={TETROMINOS[type].color} />;
}
