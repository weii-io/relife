import { InventoryItem } from "../inventory-item";
import { Location } from "../location";
import { Property } from "../property";
import { Relationship } from "../relationship";
import { Skill } from "../skill";

export class Character {
  constructor(
    protected _name: string,
    protected _age: number,
    protected _health: number,
    protected _happiness: number,
    protected _looks: number,
    protected _smarts: number,
    protected _wealth: number,
    protected _skills: Skill[],
    protected _inventory: InventoryItem[],
    protected _currentLocation: Location,
    protected _properties: Property[],
    protected _relationships: Relationship[]
  ) {}

  get name() {
    return this._name;
  }

  get age() {
    return this._age;
  }

  get health() {
    return this._health;
  }

  get happiness() {
    return this._happiness;
  }

  get wealth() {
    return this._wealth;
  }

  get looks() {
    return this._looks;
  }

  get smarts() {
    return this._smarts;
  }

  get skills() {
    return this._skills;
  }

  get inventory() {
    return this._inventory;
  }

  get properties() {
    return this._properties;
  }

  get relationships() {
    return this._relationships;
  }

  get currentLocation() {
    return this._currentLocation;
  }

  public addSkill(skill: Skill) {
    this._skills.push(skill);
  }

  public addInventoryItem(inventoryItem: InventoryItem) {
    this._inventory.push(inventoryItem);
  }

  public addProperty(property: Property) {
    this._properties.push(property);
  }

  public removeSkill(skill: Skill) {
    this._skills = this.skills.filter((s) => s !== skill);
  }

  public removeInventoryItem(inventoryItem: InventoryItem) {
    this._inventory = this.inventory.filter((i) => i !== inventoryItem);
  }

  public removeProperty(property: Property) {
    this._properties = this.properties.filter((p) => p !== property);
  }

  public addRelationship(relationship: Relationship) {
    this._relationships.push(relationship);
  }
}
