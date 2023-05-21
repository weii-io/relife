import { World } from "../world";
import { WorldEngine } from "./engines/world";
import { Storage } from "./storage";

export class Game {
  private world: World;
  constructor() {
    // initialize storage
    // initialize world engine
    this.world = new WorldEngine();
    // initialize characters engine
    // initialize player engine
  }
}
