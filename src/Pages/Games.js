import React, { useEffect, useState } from "react";

import {
  GameTabs,
  GameTitle,
  RowsBox,
  GameBox,
  GameContent,
} from "./styles/styeldGames";

import GameCard from "../Components/Games/GameCard";

//image
import tictactoes from "../image/tictactoe_title.png";
import tetris from "../image/tetris_title.png";
const gameItems = [
  {
    title: "TicTacToe",
    gTypes: "arcade",
    toUrl: "/tictactoe",
    img: `${tictactoes}`,
  },
  {
    title: "Tetris",
    gTypes: "arcade",
    toUrl: "/tetris",
    img: `${tetris}`,
  },
  { title: "Memory", gTypes: "Puzzle", toUrl: "/tetris" },
  { title: "Pacman", gTypes: "arcade", toUrl: "/tetris" },
  { title: "MineSweep", gTypes: "Puzzle", toUrl: "/tetris" },
  { title: "Snake", gTypes: "action", toUrl: "/tetris" },
];

export default function Games() {
  return (
    <GameBox>
      <GameContent>
        {gameItems.map((c, i) => (
          <GameCard
            key={i}
            title={c.title}
            type={c.gTypes}
            toUrl={c.toUrl}
            img={c.img}
          />
        ))}
      </GameContent>
    </GameBox>
  );
}
