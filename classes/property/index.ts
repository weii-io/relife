import { Location } from "../location";

export class Property {
  constructor(
    private _name: string,
    private _value: number,
    private _location: Location
  ) {}

  get name() {
    return this._name;
  }

  get value() {
    return this._value;
  }

  get location() {
    return this._location;
  }
}
