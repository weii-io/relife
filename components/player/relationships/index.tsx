import React from "react";
import { GameContext } from "../../../context";
import { IGameContext } from "../../../context/interface";
export const Relationships = () => {
  const dialog = React.useRef<HTMLDialogElement>(null);
  const { player } = React.useContext(GameContext) as IGameContext;
  return (
    <>
      <button onClick={() => dialog.current?.showModal()}>Relationships</button>
      <dialog ref={dialog}>
        <h1>Relationships</h1>
        <h2>Parents</h2>
        {player.relationships.filter(
          (relationship) => relationship.type === "parent"
        ).length === 0 && <p>You are an orphan</p>}
        {player.relationships
          .filter((relationship) => relationship.type === "parent")
          .map((relationship, index) => (
            <div key={index}>
              <p>{relationship.character.name}</p>
              <p>Closeness: {relationship.closeness}</p>
            </div>
          ))}
        <button onClick={() => dialog.current?.close()}>Close</button>
      </dialog>
    </>
  );
};
