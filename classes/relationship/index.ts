import { RELATIONSHIP } from "../../enums";
import { Character } from "../character";

export class Relationship {
  constructor(
    private _character: Character,
    private _type: RELATIONSHIP,
    private _closeness: number
  ) {}

  get closeness() {
    return this._closeness;
  }

  get type() {
    return this._type;
  }
}
