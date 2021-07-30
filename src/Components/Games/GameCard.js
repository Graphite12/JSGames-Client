import react from "react";
import { NavLink as Link, useHistory } from "react-router-dom";
import { GamesCard, GameTitles, GamesImage } from "./styles/StyledGameCard";

export default function GameCard({ title, type, toUrl }) {
  const history = useHistory();

  const handleClickGames = () => {
    history.push(`${toUrl}`);
  };
  return (
    <GamesCard onClick={handleClickGames}>
      <GamesImage>img</GamesImage>
      <GameTitles>
        <div>{type}</div>
        <div>{title}</div>
      </GameTitles>
    </GamesCard>
  );
}
