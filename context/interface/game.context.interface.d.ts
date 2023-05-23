import { Player } from "../../classes/player";
import { World } from "../../classes/world";

export interface IGameContext {
  player: Player;
  world: World;
}
