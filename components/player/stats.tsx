import React from "react";
import { GameContext } from "../../context";
import { IGameContext } from "../../context/interface";
export const PlayerStats = () => {
  const { player } = React.useContext(GameContext) as IGameContext;

  return (
    <section>
      <h1>Player Info</h1>
      <h2>Playar name: </h2>
      <p>{player.name}</p>
    </section>
  );
};
