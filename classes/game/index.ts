import { Player } from "../player";
import { World } from "../world";
import { PlayerEngine } from "./engines/player";
import { WorldEngine } from "./engines/world";

export class Game {
  private _world: World;
  private _player: Player;

  constructor() {
    // initialize world
    this._world = new WorldEngine().generateWorld();
    // initialize player engine
    this._player = new PlayerEngine(this._world).generatePlayer();
  }

  get world() {
    return this._world;
  }

  get player() {
    return this._player;
  }
}
