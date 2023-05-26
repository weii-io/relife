import { Character } from "../classes/character";

export class CharacterSet extends Set<Character> {
  equals(a: Character, b: Character): boolean {
    // Implement your custom equality comparison logic here
    // Return true if a and b are considered equal, false otherwise
    // Example: compare a specific property of the objects for equality
    return a.serialize() === b.serialize();
  }

  add(value: Character): this {
    for (const existingValue of this) {
      if (this.equals(existingValue, value)) {
        return this; // Skip adding if already exists
      }
    }
    return super.add(value);
  }
}
