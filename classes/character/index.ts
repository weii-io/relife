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

  get skills() {
    return this._skills;
  }

  get inventory() {
    return this._inventory;
  }

  get properties() {
    return this._properties;
  }

  get currentLocation() {
    return this._currentLocation;
  }

  set setCurrentLocation(currentLocation: Location) {
    this._currentLocation = currentLocation;
  }

  set setName(name: string) {
    this._name = name;
  }

  set setAge(age: number) {
    this._age = age;
  }

  set setHealth(health: number) {
    this._health = health;
  }

  set setHappiness(happiness: number) {
    this._happiness = happiness;
  }

  set setWealth(wealth: number) {
    this._wealth = wealth;
  }

  set setSkills(skills: Skill[]) {
    this._skills = skills;
  }

  set setInventory(inventory: InventoryItem[]) {
    this._inventory = inventory;
  }

  set setProperties(properties: Property[]) {
    this._properties = properties;
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
}
