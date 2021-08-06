import react from "react";
import { NavLink as Link, useHistory } from "react-router-dom";
import { GamesCard, GameTitles, GamesImage } from "./styles/StyledGameCard";

export default function GameCard({ title, type, toUrl, img }) {
  const history = useHistory();

  const handleClickGames = () => {
    history.push(`${toUrl}`);
  };
  return (
    <GamesCard onClick={handleClickGames}>
      <GamesImage>
        <img width="100%" height="100%" src={img} />
      </GamesImage>
      <GameTitles>
        <h1>{title}</h1>
      </GameTitles>
    </GamesCard>
  );
}
