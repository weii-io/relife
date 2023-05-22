import { RELATIONSHIP } from "../../enums";
import { Character } from "../character";

export class Relationship {
  constructor(
    private _character: Character,
    private _type: RELATIONSHIP,
    private _level: number
  ) {}

  get level() {
    return this._level;
  }

  get type() {
    return this._type;
  }
}
