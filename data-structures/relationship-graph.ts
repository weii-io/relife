import { Character } from "../classes/character";
import { Relationship } from "../classes/relationship";
import { RELATIONSHIP } from "../enums";
import { CharacterSet } from "./character-set";

export class RelationshipGraph {
  static EDGE_CONNECTION_KEY = "-connected-to-";
  private nodes: { [serializedCharacter: string]: CharacterSet };
  private edges: { [serializedCharacter: string]: Relationship };

  constructor() {
    this.nodes = {};
    this.edges = {};
  }

  addNode(node: Character) {
    if (!this.nodes[node.serialize()]) {
      this.nodes[node.serialize()] = new CharacterSet();
    }
  }

  addEdge(from: Character, to: Character, relationship: Relationship) {
    this.addNode(from);
    this.addNode(to);

    const edgeKey = this.getEdgeKey(from, to);
    this.edges[edgeKey] = relationship;

    this.nodes[from.serialize()].add(to);
    this.nodes[to.serialize()].add(from);
  }

  getAdjacentNodes(node: Character): CharacterSet {
    return this.nodes[node.serialize()] || new CharacterSet();
  }

  hasEdge(from: Character, to: Character): boolean {
    const edgeKey = this.getEdgeKey(from, to);
    return edgeKey in this.edges;
  }

  getRelationship(from: Character, to: Character): Relationship | undefined {
    const edgeKey = this.getEdgeKey(from, to);
    return this.edges[edgeKey];
  }

  removeNode(node: Character) {
    delete this.nodes[node.serialize()];
    for (const adjacentNodes in this.nodes) {
      this.nodes[adjacentNodes].delete(node);
    }

    // Remove associated edges
    for (const edgeKey in this.edges) {
      if (edgeKey.includes(node.toString())) {
        delete this.edges[edgeKey];
      }
    }
  }

  removeEdge(from: Character, to: Character) {
    const edgeKey = this.getEdgeKey(from, to);
    delete this.edges[edgeKey];

    this.nodes[from.serialize()].delete(to);
    this.nodes[to.serialize()].delete(from);
  }

  private getEdgeKey(from: Character, to: Character): string {
    return `${from.serialize()}${
      RelationshipGraph.EDGE_CONNECTION_KEY
    }${to.serialize()}`;
  }

  getParents(node: Character) {
    const parent: Character[] = [];
    if (!this.nodes[node.serialize()]) return parent;
    this.nodes[node.serialize()].forEach((character) => {
      if (this.getRelationship(character, node)?.type === RELATIONSHIP.PARENT)
        parent.push(character);
    });
    return parent;
  }
}
