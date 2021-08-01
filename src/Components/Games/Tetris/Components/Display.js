import react from "react";
import { DisplayWrapper } from "./styles/StyledDisplay";
const Display = ({ gameOver, text }) => (
  <DisplayWrapper gameOver={gameOver}>{text}</DisplayWrapper>
);

export default Display;
