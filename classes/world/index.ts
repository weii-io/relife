import { Character } from "../character";
import { Location } from "../location";

export class World {
  constructor(private _location: Location, private _characters: Character[]) {}

  get location(): Location {
    return this._location;
  }

  get characters(): Character[] {
    return this._characters;
  }

  set location(location: Location) {
    this._location = location;
  }

  public addCharacter(character: Character) {
    this._characters.push(character);
  }
}
