import { RELATIONSHIP } from "../../types";
import { Character } from "../character";

export class Relationship {
  constructor(private _type: RELATIONSHIP, private _closeness: number) {}

  get closeness() {
    return this._closeness;
  }

  get type() {
    return this._type;
  }
}
