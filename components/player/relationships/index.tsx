import React from "react";
import { GameContext } from "../../../context";
import { IGameContext } from "../../../context/interface";
export const Relationships = () => {
  const dialog = React.useRef<HTMLDialogElement>(null);
  const { world, player } = React.useContext(GameContext) as IGameContext;
  return (
    <>
      <button onClick={() => dialog.current?.showModal()}>Relationships</button>
      <dialog ref={dialog}>
        <h1>Relationships</h1>
        <h2>Parents</h2>
        <ul>
          {world.relationships.getParents(player).map((parent, index) => (
            <li key={index}>{parent.name}</li>
          ))}
        </ul>
        <button onClick={() => dialog.current?.close()}>Close</button>
      </dialog>
    </>
  );
};
