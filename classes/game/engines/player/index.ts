import { Character } from "../../../character";
import { Player } from "../../../player";
import Chance from "chance";
import { World } from "../../../world";
import { Relationship } from "../../../relationship";
import { RELATIONSHIP } from "../../../../enums";

const chance = new Chance();

export class PlayerEngine {
  constructor(private world: World) {}

  public randomizeParent(to: Character) {
    const random = chance.integer({ min: 0, max: 2 });
    Array.from({ length: random }).forEach((_) => {
      const parent = this.generateParent(to);
      this.world.addCharacter(parent);
      to.addRelationship(
        new Relationship(
          parent,
          RELATIONSHIP.PARENT,
          chance.integer({ min: 50, max: 100 })
        )
      );
    });
  }

  public generateParent(to: Character): Character {
    return new Character(
      // same last name as child
      `${chance.first()} ${to.name.split(" ")[1]}`,
      // age is 20-40 years older than child
      to.age + chance.integer({ min: 20, max: 40 }),
      // health is 50-100
      chance.integer({ min: 50, max: 100 }),
      // happiness is 50-100
      chance.integer({ min: 50, max: 100 }),
      // wealth is 0-100
      chance.integer({ min: 0, max: 100 }),
      // skills is []
      [],
      // inventory is []
      [],
      // current location is same as child
      to.currentLocation,
      // properties is []
      [],
      // relationships is []
      [
        new Relationship(
          to,
          RELATIONSHIP.PARENT,
          chance.integer({ min: 50, max: 100 })
        ),
      ]
    );
  }

  public generatePlayer() {
    const player = new Player(
      chance.name(),
      0,
      chance.integer({ min: 50, max: 100 }),
      100,
      0,
      [],
      [],
      this.world.location,
      [],
      []
    );
    this.world.addCharacter(player);
    this.randomizeParent(player);
    return player;
  }
}
