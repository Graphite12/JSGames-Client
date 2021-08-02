import { faSquare } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Title, TTTMain } from "../styles/tttStyles";
import GreenButton from "../modules/GreenButton";
// import Credit from "./styles/tttStyles";

export default function Modes({ manBtn, AIBtn }) {
  return (
    <TTTMain>
      <Title>Tic Tac Toe</Title>
      <GreenButton onClick={manBtn}>멀티 플레이</GreenButton>
      <GreenButton onClick={AIBtn}>싱글 플레이</GreenButton>
      {/* <Credit>하우두유두</Credit> */}
    </TTTMain>
  );
}
