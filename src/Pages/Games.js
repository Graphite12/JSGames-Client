import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { useRef } from "react";
import { Target, TargetBox, Test } from "./styles/styeldGames";
import TicTacToe from "../Components/Games/TicTacToe/TicTacToe";

export default function Games() {
  return (
    <Test>
      <TicTacToe />
    </Test>
  );
}
