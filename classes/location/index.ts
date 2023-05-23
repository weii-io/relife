export class Location {
  constructor(private _state: string, private _country: string) {}

  get state() {
    return this._state;
  }

  get country() {
    return this._country;
  }
}
