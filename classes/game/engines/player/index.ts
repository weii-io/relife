import { Character } from "../../../character";
import { Player } from "../../../player";
import Chance from "chance";
import { World } from "../../../world";
import { Relationship } from "../../../relationship";
import { Skill } from "../../../skill";
import { InventoryItem } from "../../../inventory-item";
import { Location } from "../../../location";
import { Property } from "../../../property";
import { ISerializedCharacter } from "../../../../interface";
import { GENDER } from "../../../../types";

const chance = new Chance();

export class PlayerEngine {
  constructor(private world: World) {}

  public randomizeParent(child: Character) {
    const random = chance.integer({ min: 0, max: 2 });
    Array.from({ length: random }).forEach((_) => {
      const parent = this.generateParent(child);
      this.world.addCharacter(parent);
      this.world.addRelationship(
        child,
        parent,
        new Relationship("child", chance.integer({ min: 50, max: 100 }))
      );
      this.world.addRelationship(
        parent,
        child,
        new Relationship("parent", chance.integer({ min: 50, max: 100 }))
      );
    });
  }

  public generateParent(child: Character): Character {
    const gender: GENDER = chance.pickone(["male", "female"]);
    const parent = new Character(
      // same last name as child
      `${chance.first({
        gender: gender,
      })} ${child.name.split(" ")[1]}`,
      // age between 20 and 50
      chance.integer({ min: 20, max: 50 }),
      // health between 50 and 100
      chance.integer({ min: 50, max: 100 }),
      // happiness between 50 and 100
      chance.integer({ min: 50, max: 100 }),
      // looks between 50 and 100
      chance.integer({ min: 50, max: 100 }),
      // smarts between 50 and 100
      chance.integer({ min: 50, max: 100 }),
      // wealth between 0 and 100
      chance.integer({ min: 0, max: 100 }),
      // no skills
      [],
      // no inventory
      [],
      // same location as child
      child.currentLocation,
      // no properties
      [],
      gender,
      0,
      chance.profession()
    );
    return parent;
  }

  public generateNewPlayer() {
    const gender: GENDER = chance.pickone(["male", "female"]);
    const player = new Player(
      chance.name({
        gender: gender,
      }),
      0,
      100,
      100,
      chance.integer({ min: 50, max: 100 }),
      chance.integer({ min: 50, max: 100 }),
      0,
      [],
      [],
      this.world.location,
      [],
      gender,
      0,
      ""
    );
    this.world.addCharacter(player);
    this.randomizeParent(player);
    return player;
  }

  public generateExistingPlayer(existingPlayer: ISerializedCharacter) {
    return new Player(
      existingPlayer._name,
      existingPlayer._age,
      existingPlayer._health,
      existingPlayer._happiness,
      existingPlayer._looks,
      existingPlayer._smarts,
      existingPlayer._wealth,
      existingPlayer._skills.map(
        (skill) => new Skill(skill._name, skill._level, skill._experience)
      ),
      existingPlayer._inventory.map(
        (item) => new InventoryItem(item._name, item._quantity)
      ),
      new Location(
        existingPlayer._currentLocation._state,
        existingPlayer._currentLocation._country
      ),
      existingPlayer._properties.map(
        (property) =>
          new Property(
            property._name,
            property._value,
            new Location(property._location._state, property._location._country)
          )
      ),
      existingPlayer._gender,
      existingPlayer._knowledge,
      existingPlayer._profession
    );
  }
}
