import { RelationshipGraph } from "../../data-structures";
import { Character } from "../character";
import { Location } from "../location";
import { Relationship } from "../relationship";

export class World {
  protected _relationships: RelationshipGraph;
  private _location: Location;
  private _characters: Character[];

  constructor(
    _location: Location,
    _characters: Character[],
    _relationships: undefined
  );
  constructor(
    _location: Location,
    _characters: Character[],
    _relationships: RelationshipGraph
  );

  constructor(
    _location: Location,
    _characters: Character[],
    _relationships: RelationshipGraph | undefined
  ) {
    if (!_relationships) {
      this._relationships = new RelationshipGraph();
    } else {
      this._relationships = _relationships;
    }
    this._location = _location;
    this._characters = _characters;
  }

  get location(): Location {
    return this._location;
  }

  get characters(): Character[] {
    return this._characters;
  }

  get relationships(): RelationshipGraph {
    return this._relationships;
  }

  set location(location: Location) {
    this._location = location;
  }

  public addCharacter(character: Character) {
    this._characters.push(character);
  }

  public addRelationship(
    from: Character,
    to: Character,
    relationship: Relationship
  ) {
    this._relationships.addEdge(from, to, relationship);
  }

  public removeRelationship(from: Character, to: Character) {
    this._relationships.removeEdge(from, to);
  }
}
