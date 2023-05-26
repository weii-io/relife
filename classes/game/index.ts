import { Player } from "../player";

import { World } from "../world";
import { PlayerEngine } from "./engines/player";
import { WorldEngine } from "./engines/world";
import { Storage } from "./storage";

export class Game {
  private _world: World;
  private _player: Player;
  private _storage: Storage = new Storage();

  constructor() {
    const savedData = this._storage.read();
    if (savedData) {
      this._world = new WorldEngine().generateExistingWorld(
        savedData.world._location,
        savedData.world._characters,
        savedData.world._relationships
      );
      this._player = new PlayerEngine(this._world).generateExistingPlayer(
        savedData.player
      );
    } else {
      // initialize player engine
      this._world = new WorldEngine().generateNewWorld();
      this._player = new PlayerEngine(this._world).generateNewPlayer();
    }
  }

  get world() {
    return this._world;
  }

  get player() {
    return this._player;
  }

  public save() {
    this._storage.write(this._player);
    this._storage.write(this._world);
  }
}
