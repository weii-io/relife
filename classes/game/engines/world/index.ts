import { Character } from "../../../character";
import { Location } from "../../../location";
import { World } from "../../../world";
import Chance from "chance";

const chance = new Chance();

export class WorldEngine {
  constructor() {}

  public generateWorld() {
    const state = chance.state({
      full: true,
    });
    const country = "United States of America";

    const location = new Location(state, country);

    const characters: Character[] = [];

    return new World(location, characters);
  }
}
