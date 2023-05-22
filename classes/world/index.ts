import { Location } from "../location";

export class World {
  constructor(private _location: Location) {}

  get location(): Location {
    return this._location;
  }

  set location(location: Location) {
    this._location = location;
  }
}
