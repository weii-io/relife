import { GENDER } from "../../types";
import { Character } from "../character";
import { InventoryItem } from "../inventory-item";
import { Location } from "../location";
import { Property } from "../property";
import { Skill } from "../skill";

export class Player extends Character {
  constructor(
    name: string,
    age: number,
    health: number,
    happiness: number,
    looks: number,
    smarts: number,
    wealth: number,
    skills: Skill[],
    inventory: InventoryItem[],
    currentLocation: Location,
    properties: Property[],
    gender: GENDER,
    knowledge: number,
    profession: string
  ) {
    super(
      name,
      age,
      health,
      happiness,
      looks,
      smarts,
      wealth,
      skills,
      inventory,
      currentLocation,
      properties,
      gender,
      knowledge,
      profession
    );
  }
}
