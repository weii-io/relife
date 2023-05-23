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
}
