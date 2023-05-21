export class Skill {
  constructor(
    private name: string,
    private level: number,
    private experience: number
  ) {}

  get getName() {
    return this.name;
  }

  get getLevel() {
    return this.level;
  }

  get getExperience() {
    return this.experience;
  }

  set setName(name: string) {
    this.name = name;
  }

  set setLevel(level: number) {
    this.level = level;
  }

  set setExperience(experience: number) {
    this.experience = experience;
  }
}
