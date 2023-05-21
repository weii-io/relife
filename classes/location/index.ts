export class Location {
  constructor(
    private street: string,
    private city: string,
    private state: string,
    private country: string
  ) {}

  get getStreet() {
    return this.street;
  }

  get getCity() {
    return this.city;
  }

  get getState() {
    return this.state;
  }

  get getCountry() {
    return this.country;
  }

  set setStreet(street: string) {
    this.street = street;
  }

  set setCity(city: string) {
    this.city = city;
  }

  set setState(state: string) {
    this.state = state;
  }

  set setCountry(country: string) {
    this.country = country;
  }
}
