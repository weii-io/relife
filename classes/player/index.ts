import { Character } from "../character";
import { InventoryItem } from "../inventory-item";
import { Location } from "../location";
import { Property } from "../property";
import { Relationship } from "../relationship";
import { Skill } from "../skill";

export class Player extends Character {
  constructor(
    name: string,
    age: number,
    health: number,
    happiness: number,
    wealth: number,
    skills: Skill[],
    inventory: InventoryItem[],
    currentLocation: Location,
    properties: Property[],
    relationships: Relationship[]
  ) {
    super(
      name,
      age,
      health,
      happiness,
      wealth,
      skills,
      inventory,
      currentLocation,
      properties,
      relationships
    );
  }
}
