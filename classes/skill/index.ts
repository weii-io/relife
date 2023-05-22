export class Skill {
  constructor(
    private _name: string,
    private _level: number,
    private _experience: number
  ) {}

  get name() {
    return this._name;
  }

  get level() {
    return this._level;
  }

  get experience() {
    return this._experience;
  }

  set setName(name: string) {
    this._name = name;
  }

  set setLevel(level: number) {
    this._level = level;
  }

  set setExperience(experience: number) {
    this._experience = experience;
  }
}
