import { InventoryItem } from "../inventory-item";
import { Property } from "../property";
import { Skill } from "../skill";

export class Player {
  constructor(
    private name: string,
    private age: number,
    private health: number,
    private happiness: number,
    private wealth: number,
    private skills: Skill[],
    private inventory: InventoryItem[],
    private properties: Property[]
  ) {}

  get getName() {
    return this.name;
  }

  get getAge() {
    return this.age;
  }

  get getHealth() {
    return this.health;
  }

  get getHappiness() {
    return this.happiness;
  }

  get getWealth() {
    return this.wealth;
  }

  get getSkills() {
    return this.skills;
  }

  get getInventory() {
    return this.inventory;
  }

  get getProperties() {
    return this.properties;
  }

  set setName(name: string) {
    this.name = name;
  }

  set setAge(age: number) {
    this.age = age;
  }

  set setHealth(health: number) {
    this.health = health;
  }

  set setHappiness(happiness: number) {
    this.happiness = happiness;
  }

  set setWealth(wealth: number) {
    this.wealth = wealth;
  }

  set setSkills(skills: Skill[]) {
    this.skills = skills;
  }

  set setInventory(inventory: InventoryItem[]) {
    this.inventory = inventory;
  }

  set setProperties(properties: Property[]) {
    this.properties = properties;
  }

  public addSkill(skill: Skill) {
    this.skills.push(skill);
  }

  public addInventoryItem(inventoryItem: InventoryItem) {
    this.inventory.push(inventoryItem);
  }

  public addProperty(property: Property) {
    this.properties.push(property);
  }

  public removeSkill(skill: Skill) {
    this.skills = this.skills.filter((s) => s !== skill);
  }

  public removeInventoryItem(inventoryItem: InventoryItem) {
    this.inventory = this.inventory.filter((i) => i !== inventoryItem);
  }

  public removeProperty(property: Property) {
    this.properties = this.properties.filter((p) => p !== property);
  }
}