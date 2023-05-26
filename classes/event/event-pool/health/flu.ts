import { EVENT } from "../../../../enums";
import { Character } from "../../../character";

export const FLU = {
  type: EVENT.HEALTH,
  name: "Flu",
  description: "You have caught a flu.",
  probability: 0.5,
  triggeringConditions: (character: Character) => {
    return character.health <= 50;
  },
  consequences: (
    character: Character,
    choices: "Seek medical attention" | "Ignore it"
  ) => {
    if (choices === "Seek medical attention") {
      character.wealth -= 100;
    } else if (choices === "Ignore it") {
      character.health -= 10;
    }
  },
  choices: ["Seek medical attention", "Ignore it"],
};
