import { ISerializedCharacter } from "../../../../interface";
import { Character } from "../../../character";
import { InventoryItem } from "../../../inventory-item";
import { Location } from "../../../location";
import { Property } from "../../../property";
import { Skill } from "../../../skill";
import Chance from "chance";

const chance = new Chance();
export class CharactersEngine {
  constructor() {}
  public generateExistingCharacter(existingCharacter: ISerializedCharacter) {
    return new Character(
      existingCharacter._name,
      existingCharacter._age,
      existingCharacter._health,
      existingCharacter._happiness,
      existingCharacter._looks,
      existingCharacter._smarts,
      existingCharacter._wealth,
      existingCharacter._skills.map(
        (skill) => new Skill(skill._name, skill._level, skill._experience)
      ),
      existingCharacter._inventory.map(
        (item) => new InventoryItem(item._name, item._quantity)
      ),
      new Location(
        existingCharacter._currentLocation._state,
        existingCharacter._currentLocation._country
      ),
      existingCharacter._properties.map(
        (property) =>
          new Property(
            property._name,
            property._value,
            new Location(property._location._state, property._location._country)
          )
      ),
      existingCharacter._gender,
      0,
      chance.profession()
    );
  }
}
