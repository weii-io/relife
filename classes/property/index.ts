import { Location } from "../location";

export class Property {
  constructor(
    private name: string,
    private value: number,
    private location: Location
  ) {}

  get getName() {
    return this.name;
  }

  get getValue() {
    return this.value;
  }

  get getLocation() {
    return this.location;
  }

  set setName(name: string) {
    this.name = name;
  }

  set setValue(value: number) {
    this.value = value;
  }

  set setLocation(location: Location) {
    this.location = location;
  }
}
