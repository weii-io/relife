export class Location {
  constructor(
    private _city: string,
    private _state: string,
    private _country: string
  ) {}

  get city() {
    return this._city;
  }

  get state() {
    return this._state;
  }

  get country() {
    return this._country;
  }

  set setCity(city: string) {
    this._city = city;
  }

  set setState(state: string) {
    this._state = state;
  }

  set setCountry(country: string) {
    this._country = country;
  }
}
