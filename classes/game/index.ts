import { Character } from "../character";
import { Player } from "../player";
import { World } from "../world";
import { WorldEngine } from "./engines/world";
import Chance from "chance";

const chance = new Chance();
export class Game {
  private world: World;
  private characters: Character[];
  private player: Player;
  constructor() {
    // initialize storage
    // initialize world
    this.world = new WorldEngine().generateWorld();
    // initialize player engine
    this.player = new Player(
      chance.name(),
      0,
      100,
      100,
      0,
      [],
      [],
      this.world.location,
      [],
      []
    );

    this.characters = [this.player];
    // initialize character engine
  }
}
