import { SCHOOL } from "../../types";
import { Character } from "../character";
import { Location } from "../location";

export class School {
  constructor(
    private _type: SCHOOL,
    private _tier: number,
    private _name: string,
    private _location: Location,
    private _students: Character[]
  ) {}

  get type() {
    return this._type;
  }

  get location() {
    return this._location;
  }

  get name() {
    return this._name;
  }

  get students() {
    return this._students;
  }

  get tier() {
    return this._tier;
  }
}
