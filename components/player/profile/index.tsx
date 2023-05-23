import React from "react";
import { GameContext } from "../../../context";
import { IGameContext } from "../../../context/interface";
export const Profile = () => {
  const dialog = React.useRef<HTMLDialogElement>(null);
  const { player } = React.useContext(GameContext) as IGameContext;
  return (
    <>
      <button onClick={() => dialog.current?.showModal()}>Profile</button>
      <dialog ref={dialog}>
        <p>{player.name}</p>
        <h1>Profile</h1>
        <p>Age: {player.age}</p>
        <p>
          <span>Location: </span>
          <span>
            {`${player.currentLocation.state}, ${player.currentLocation.country}`}
          </span>
        </p>

        <p>Happiness: {player.happiness}</p>
        <p>Health: {player.health}</p>
        <p>Smarts: {player.smarts}</p>
        <p>Looks: {player.looks}</p>
        <button onClick={() => dialog.current?.close()}>Close</button>
      </dialog>
    </>
  );
};
