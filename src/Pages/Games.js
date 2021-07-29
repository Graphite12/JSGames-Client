import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { useRef } from "react";
import {
  GameTabs,
  GameTitle,
  GameBox,
  GameContent,
} from "./styles/styeldGames";
import TicTacToe from "../Components/Games/TicTacToe/TicTacToe";
import GameCard from "../Components/Games/GameCard";

const gameItems = [
  { title: "TicTacToe", gTypes: "arcade", toUrl: "/games/tictactoe" },
  { title: "Tetris", gTypes: "action", toUrl: "/games/tetris" },
];

export default function Games() {
  return (
    <GameBox>
      <GameTitle></GameTitle>
      <GameTabs></GameTabs>
      <GameContent>
        {gameItems.map((c, i) => (
          <GameCard key={i} title={c.title} type={c.gTypes} toUrl={c.toUrl} />
        ))}
      </GameContent>
    </GameBox>
  );
}
