import React from "react";
import { Game } from "../classes/game";
import { GameContext } from "../context";
import { PlayerStats } from "../components/player";

export default function Home() {
  const [game, setGame] = React.useState<Game | null>(null);

  React.useEffect(() => {
    if (!game) setGame(new Game());
  }, []);

  if (game)
    return (
      <GameContext.Provider
        value={{
          player: game.player,
          world: game.world,
        }}
      >
        <PlayerStats />
      </GameContext.Provider>
    );
  else return <p>Loading...</p>;
}
