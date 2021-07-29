import react from "react";
import Stage from "./Stage";
import Display from "./Display";
import StartButton from "./StartButton";
export default function Tetrisxd() {
  return (
    <div>
      <Stage />
      <aside>
        <div>
          <Display text="Score" />
          <Display text="Row" />
          <Display text="Level" />
        </div>
        <StartButton />
      </aside>
    </div>
  );
}
