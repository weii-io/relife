import React from "react";
import { GameContext } from "../../context";
import { IGameContext } from "../../context/interface";
export const PlayerStats = () => {
  const { player } = React.useContext(GameContext) as IGameContext;

  return (
    <section>
      <div>
        <h1>{player.name}</h1>
        <p>Age: {player.age}</p>
      </div>
    </section>
  );
};
