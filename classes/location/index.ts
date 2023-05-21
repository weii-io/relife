export class Location {
  constructor(
    private city: string,
    private state: string,
    private country: string
  ) {}

  get getCity() {
    return this.city;
  }

  get getState() {
    return this.state;
  }

  get getCountry() {
    return this.country;
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
