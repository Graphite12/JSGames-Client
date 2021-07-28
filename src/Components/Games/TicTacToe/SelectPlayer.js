import React from "react";
import { tttButton, Title } from "./styles/tttStyles";

function SelectPlayer({ xPlayer, oPlayer }) {
  return (
    <>
      <Title>Select Player</Title>
      <tttButton width={"100px"} height={"100px"} onClick={xPlayer}>
        X
      </tttButton>
      <tttButton width={"100px"} height={"100px"} onClick={oPlayer}>
        O
      </tttButton>
    </>
  );
}

export default SelectPlayer;
