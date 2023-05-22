import { Character } from "../../../character";
import { Player } from "../../../player";
import Chance from "chance";
import { World } from "../../../world";

const chance = new Chance();

export class PlayerEngine {
  constructor() {}

  public generateParent(to: Character) {
    // randomize parent
    // can generate 0 parent, 1 parent, or 2 parents
    // if 0 parent, return []
    // if 1 parent, return [parent]
    // if 2 parents, return [parent, parent]

    // generate a random number 0,1 or 2
    const random = Math.floor(Math.random() * 3);
    switch (random) {
      case 0:
        return [];
      case 1:
        return [];
      case 2:
        return [];
    }
  }

  public generatePlayer(world: World) {
    return new Player(
      chance.name(),
      chance.age(),
      chance.integer({ min: 0, max: 100 }),
      chance.integer({ min: 0, max: 100 }),
      chance.integer({ min: 0, max: 100 }),
      [],
      [],
      world.getLocation,
      [],
      []
    );
  }
}
