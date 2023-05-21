import { Location } from "../location";

export class World {
  constructor(private location: Location) {}

  get getLocation(): Location {
    return this.location;
  }

  set setLocation(location: Location) {
    this.location = location;
  }
}
