import { ISerializedInventoryItem } from "./serialized-inventory-item";
import { ISerializedLocation } from "./serialized-location";
import { ISerializedProperty } from "./serialized-property";
import { ISerializedSkill } from "./serialized-skill";

export interface ISerializedCharacter {
  _name: string;
  _age: number;
  _health: number;
  _happiness: number;
  _looks: number;
  _smarts: number;
  _wealth: number;
  _skills: ISerializedSkill[];
  _inventory: ISerializedInventoryItem[];
  _currentLocation: ISerializedLocation;
  _properties: ISerializedProperty[];
}
