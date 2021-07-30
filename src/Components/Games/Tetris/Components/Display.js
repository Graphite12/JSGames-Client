import react from "react";
import { DisplayWrapper } from "./styles/StyledDisplay";
export default function Display({ gameOver, text }) {
  return <DisplayWrapper gameOver={gameOver}>{text}</DisplayWrapper>;
}
