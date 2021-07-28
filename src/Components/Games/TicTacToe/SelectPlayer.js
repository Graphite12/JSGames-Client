import React from "react";
import {
  TTTButton,
  Title,
  TTTMain,
  SelectPlayerBtnBox,
} from "./styles/tttStyles";

function SelectPlayer({ xPlayer, oPlayer }) {
  return (
    <TTTMain>
      <Title>Select Player</Title>
      <SelectPlayerBtnBox>
        <button onClick={xPlayer}>X</button>
        <button onClick={oPlayer}>O</button>
      </SelectPlayerBtnBox>
    </TTTMain>
  );
}

export default SelectPlayer;
