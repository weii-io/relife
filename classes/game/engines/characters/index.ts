import { Character } from "../../../character";
import { InventoryItem } from "../../../inventory-item";
import { Location } from "../../../location";
import { Property } from "../../../property";
import { Skill } from "../../../skill";

export class CharactersEngine {
  constructor() {}
  public generateExistingCharacter(existingCharacter: {
    _name: string;
    _age: number;
    _health: number;
    _happiness: number;
    _looks: number;
    _smarts: number;
    _wealth: number;
    _skills: { _name: string; _level: number; _experience: number }[];
    _inventory: { _name: string; _quantity: number }[];
    _currentLocation: { _state: string; _country: string };
    _properties: {
      _name: string;
      _value: number;
      _location: { _state: string; _country: string };
    }[];
  }) {
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
      )
    );
  }
}
