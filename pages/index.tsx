import React from "react";
import { Game } from "../classes/game";
import { GameContext } from "../context";
import { PlayerStats } from "../components/player";
import { Profile } from "../components/player/profile";
import { Relationships } from "../components/player/relationships";

export default function Home() {
  const [game, setGame] = React.useState<Game | null>(null);

  React.useEffect(() => {
    if (!game) setGame(new Game());
  }, []);

  React.useEffect(() => {
    // save gave to storage
    if (game) {
      game.save();
    }
  }, [game]);

  if (game)
    return (
      <GameContext.Provider
        value={{
          player: game.player,
          world: game.world,
        }}
      >
        <PlayerStats />
        <Profile />
        <Relationships />
      </GameContext.Provider>
    );
  else return <p>Loading...</p>;
}
