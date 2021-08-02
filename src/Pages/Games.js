import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { useRef } from "react";
import {
  GameTabs,
  GameTitle,
  GameBox,
  GameContent,
} from "./styles/styeldGames";

import GameCard from "../Components/Games/GameCard";

const gameItems = [
  { title: "TicTacToe", gTypes: "arcade", toUrl: "/tictactoe" },
  { title: "Tetris", gTypes: "action", toUrl: "/tetris" },
  { title: "MemoryCard", gTypes: "Puzzle", toUrl: "/tetris" },
  { title: "Pacman", gTypes: "arcade", toUrl: "/tetris" },
  { title: "MineSweep", gTypes: "Puzzle", toUrl: "/tetris" },
  { title: "Snake", gTypes: "action", toUrl: "/tetris" },
];

export default function Games() {
  return (
    <GameBox>
      <GameTitle></GameTitle>
      <GameTabs>
        {gameItems.map((c, i) => (
          <button>{c.gTypes}</button>
        ))}
      </GameTabs>
      <GameContent>
        {gameItems.map((c, i) => (
          <GameCard key={i} title={c.title} type={c.gTypes} toUrl={c.toUrl} />
        ))}
      </GameContent>
    </GameBox>
  );
}
