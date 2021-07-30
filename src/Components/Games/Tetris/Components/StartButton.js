import react from "react";
import { StartButtons } from "./styles/StyledStartButton";
export default function StartButton({ callback }) {
  return <StartButtons onClick={callback}>StartButton</StartButtons>;
}
