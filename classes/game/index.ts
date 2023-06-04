import { US_STATES } from "../../constants";
import { ISerializedSchool } from "../../interface";
import { Location } from "../location";
import { Player } from "../player";
import { School } from "../school";

import { World } from "../world";
import { PlayerEngine } from "./engines/player";
import { SchoolEngine } from "./engines/school";
import { WorldEngine } from "./engines/world";
import { Storage } from "./storage";

export class Game {
  private _world: World;
  private _player: Player;
  private _storage: Storage = new Storage();
  private _schools: School[];

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
      this._schools = savedData.schools.map((school: ISerializedSchool) => {
        switch (school._type) {
          case "elementary_school":
            return new SchoolEngine().generateExistingElementarySchool(school);
          case "middle_school":
            return new SchoolEngine().generateExistingMiddleSchool(school);
          case "high_school":
            return new SchoolEngine().generateExistingHighSchool(school);
          case "community_college":
            return new SchoolEngine().generateExistingCommunityCollege(school);
          case "university":
            return new SchoolEngine().generateExistingUniversity(school);
          default:
            break;
        }
      });
    } else {
      // initialize player engine
      this._world = new WorldEngine().generateNewWorld();
      this._player = new PlayerEngine(this._world).generateNewPlayer();
      this._schools = US_STATES.map((state) => {
        const tiers = [1, 2, 3];
        return [
          ...tiers
            .map((tier) => [
              new SchoolEngine().generateElementarySchool(
                tier,
                new Location(state, "United States")
              ),
              new SchoolEngine().generateMiddleSchool(
                tier,
                new Location(state, "United States")
              ),
              new SchoolEngine().generateHighSchool(
                tier,
                new Location(state, "United States")
              ),
              new SchoolEngine().generateCommunityCollege(
                tier,
                new Location(state, "United States")
              ),
              new SchoolEngine().generateUniversity(
                tier,
                new Location(state, "United States")
              ),
            ])
            .flat(),
        ];
      }).flat();
    }
  }

  get world() {
    return this._world;
  }

  get player() {
    return this._player;
  }

  get schools() {
    return this._schools;
  }

  public save() {
    this._storage.writeObject(this._player);
    this._storage.writeObject(this._world);
    this._storage.writeArray(this._schools, "schools");
  }
}
