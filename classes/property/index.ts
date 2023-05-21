export class Property {
  constructor(
    private name: string,
    private value: number,
    private location: string
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

  set setLocation(location: string) {
    this.location = location;
  }
}
