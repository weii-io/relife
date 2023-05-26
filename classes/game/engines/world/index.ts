import { Character } from "../../../character";
import { Location } from "../../../location";
import { World } from "../../../world";
import Chance from "chance";
import { CharactersEngine } from "../characters";
import {
  ISerializedCharacter,
  ISerializedLocation,
  ISerializedRelationship,
} from "../../../../interface";
import CircularJson from "circular-json";
import { Relationship } from "../../../relationship";
import { RelationshipGraph } from "../../../../data-structures";

const chance = new Chance();

export class WorldEngine {
  constructor() {}

  public generateNewWorld() {
    const state = chance.state({
      full: true,
    });
    const country = "United States";

    const location = new Location(state, country);

    const characters: Character[] = [];

    return new World(location, characters, undefined);
  }

  public generateExistingWorld(
    location: ISerializedLocation,
    characters: ISerializedCharacter[],
    relationships: {
      nodes: object;
      edges: any;
    }
  ) {
    const existingRelationships = new RelationshipGraph();
    Object.keys(relationships.edges).map((_key: any) => {
      const [_from, _to] = _key.split(RelationshipGraph.EDGE_CONNECTION_KEY);
      const from: ISerializedCharacter = CircularJson.parse(_from);
      const to: ISerializedCharacter = CircularJson.parse(_to);
      const _relationship: ISerializedRelationship = relationships.edges[_key];
      existingRelationships.addEdge(
        new CharactersEngine().generateExistingCharacter(from),
        new CharactersEngine().generateExistingCharacter(to),
        new Relationship(_relationship._type, _relationship._closeness)
      );
    });
    return new World(
      new Location(location._state, location._country),
      characters.map((character) =>
        new CharactersEngine().generateExistingCharacter(character)
      ),
      existingRelationships
    );
  }
}
